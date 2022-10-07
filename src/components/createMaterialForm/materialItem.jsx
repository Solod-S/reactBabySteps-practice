import React from 'react';
const EditMaterialModal = ({ closeModal, onEdit }) => {
  return (
    <div>
      <h2> Закрыть модалку</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          closeModal();
        }}
      >
        Вот теперь точно редактируем
      </button>
      <button type="button" onClick={closeModal}>
        закрыть
      </button>
    </div>
  );
};
// ({ title, material, id, onDelete, onUptade });
export class MaterialItem extends React.Component {
  state = {
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { title, material, id, onDelete, onUptade } = this.props;
    return (
      <div>
        <h5>{title}</h5>
        <p>{material}</p>
        <button type="button" onClick={() => onDelete(id)}>
          Удалить
        </button>
        <button
          type="button"
          onClick={this.openModal}

          // onClick={() => onUptade({
          //   id: id, title: Date.now()
          // })}
        >
          Редактировать
        </button>
        {this.state.isModalOpen && (
          <EditMaterialModal
            closeModal={this.closeModal}
            onEdit={() =>
              onUptade({
                id: id,
                title: Date.now(),
              })
            }
          />
        )}
      </div>
    );
  }
}
