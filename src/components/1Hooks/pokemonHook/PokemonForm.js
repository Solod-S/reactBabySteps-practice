import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export default function PokemonFormHook ({onSubmit}) {
  // state = {
  //   pokemonName: '',
  // };
const [pokemonName, setPokemonName] = useState('')

  // handleNameChange = event => {
  //   this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  // };
 const handleNameChange = event => {
  setPokemonName( event.currentTarget.value.toLowerCase() );
  };
  // handleSubmit = event => {
  //   event.preventDefault();

  //   if (this.state.pokemonName.trim() === '') {
  //     toast.error('Введите имя покемона.');
  //     return;
  //   }

  //   this.props.onSubmit(this.state.pokemonName);
  //   this.setState({ pokemonName: '' });
  // };
  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Введите имя покемона.');
      return;
    }

    onSubmit(pokemonName);
    setPokemonName('');
  };
 
    return (
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }

