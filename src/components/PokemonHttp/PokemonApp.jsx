import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import PokemonForm from './pokemonComponents/PokemonForm';
import PokemonInfo from './pokemonComponents/PokemonInfo';
// import PokemonInfo from './components/PokemonInfo';

export default class Pokemon extends Component {
  state = {
    pokemonName: null,
  };

  handleFormSubmit = pokemon => {
    console.log(pokemon);
    this.setState({ pokemonName: pokemon });
  };
  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmitPokemon={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}

// ТАК КАК НЕ НУЖНО ДЕЛАТЬ
// export default class Pokemon extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };
//   componentDidMount() {
//     this.setState({ loading: true });
//     setTimeout(
//       () =>
//         fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//           .then(response => response.json())
//           .then(pokemon => this.setState({ pokemon }))
//           .finally(this.setState({ loading: false })),
//       2000,
//     );
//   }
//   render() {
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {this.state.loading && <h1>Загружаем...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
