//https://mockapi.io/projects/633f0dec0dbc3309f3c3fe57

import React from 'react';
import { CreateMaterialForm } from './createMaterialForm';
import * as API from './services/services';
import { Materials } from './Materials';
import { faChainSlash } from '@fortawesome/free-solid-svg-icons';
export default class CreateMaterialFormApp extends React.Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.GetMaterialToServer();
      this.setState({ materials: materials });
      this.setState({ isLoading: false });
    } catch (error) {
      faChainSlash.log(error);
      this.setState({ error: true, isLoading: false });
    }
  }

  addMaterials = async values => {
    try {
      this.setState({ isLoading: true });
      const material = await API.AddMaterialToServer(values);
      this.setState(prevState => ({
        materials: [material, ...prevState.materials],
      }));
      console.log(material);
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: true, isLoading: false });
    }
  };
  deleteMaterial = async id => {
    try {
      await API.DelMaterialToServer(id);
      this.setState(prevState => ({
        materials: prevState.materials.filter(material => material.id !== id),
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
  };
  updateMaterial = async fields => {
    try {
      const updatedMaterial = await API.PutMaterialToServer(fields);
      this.setState(prevState => ({
        materials: prevState.materials.map(material =>
          material.id === fields.id ? updatedMaterial : material,
        ),
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
  };
  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <>
        {error && <p>Oй!Что-то пошло не так... перезагрузите страницу</p>}
        {isLoading && <div> ЗАГРУЗКА ....</div>}
        <CreateMaterialForm onSubmit={this.addMaterials} />
        <Materials
          materials={materials}
          onDelete={this.deleteMaterial}
          onUptade={this.updateMaterial}
        />
      </>
    );
  }
}
