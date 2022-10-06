import React, { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../pokemonApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };
  componentDidUpdate(prevProps, pS) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      return pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
      // return fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
      //   .then(response => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //     return Promise.reject(
      //       new Error(`Все пропало, покемона ${nextName} нет!`),
      //     );
      //   })
      //   .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
      //   .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;
    if (status === Status.IDLE) {
      return <div> Введите имя покемона</div>;
    }
    if (status === Status.PENDING) {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === Status.RESOLVED) {
      return <PokemonDataView pokemon={pokemon} />;
    }
    if (status === Status.REJECTED) {
      return <PokemonErrorView message={error.message} />;
    }
  }
}

//
//
//
//
//
//
//
//
// без стейт машины
//
//
//
//  class PokemonInfoWithautStateMachine extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     error: null,
//   };
//   componentDidUpdate(prevProps, pS) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;
//     if (prevName !== nextName) {
//       this.setState({ loading: true, pokemon: null });
//       // перед каждым запросом ставим стейт загрузки тру + сбрасываем покемона чтобы не мусолил глаза
//       setTimeout(() => {
//         return (
//           fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//             .then(response => {
//               if (response.ok) {
//                 return response.json();
//               }
//               return Promise.reject(
//                 new Error(`Все пропало, покемона ${nextName} нет!`),
//               );
//               // словит ошибку при любых раскладах
//             })
//             .then(pokemon => this.setState({ pokemon }))
//             .catch(error => this.setState({ error }))
//             // словит ошибку если бекенд нормальный и возвращает ошибку
//             .finally(this.setState({ loading: false }))
//         );
//       }, 1000);
//     }
//     //
//     //
//     // ловим ошибку не правильно
//     // if (prevProps.pokemonName !== this.props.pokemonName) {
//     //   this.setState({ loading: true });
//     //   setTimeout(() => {
//     //     return fetch(
//     //       `https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`,
//     //     )
//     //       .then(response => response.json())
//     //       .then(pokemon => this.setState({ pokemon }))
//     //       .catch(error => this.setState({ error }))
//     //       .finally(this.setState({ loading: false }));
//     //   }, 2000);
//     // }
//   }
//   render() {
//     const { pokemon, loading, error } = this.state;
//     const { pokemonName } = this.props;
//     return (
//       <div>
//         <h1>Pokemoninfo</h1>
//         {error && <h2>{error.message}</h2>}
//         {loading && <div>Загружаем...</div>}
//         {!pokemonName && <div> Введите имя покемона</div>}
//         {pokemon && (
//           <div>
//             <h2>{pokemon.name}</h2>
//             <img
//               src={pokemon.sprites.other['official-artwork'].front_default}
//               alt={pokemon.name}
//               width="300"
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
//====================================================================
//====================================================================
//====================================================================
//====================================================================
//====================================================================
// import { Component } from 'react';
// import PokemonDataView from './PokemonDataView';
// import PokemonErrorView from './PokemonErrorView';
// import PokemonPendingView from './PokemonPendingView';
// import pokemonAPI from '../services/pokemon-api';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// export default class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     error: null,
//     status: Status.IDLE,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       this.setState({ status: Status.PENDING });

//       setTimeout(() => {
//         pokemonAPI
//           .fetchPokemon(nextName)
//           .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
//           .catch(error => this.setState({ error, status: Status.REJECTED }));
//       }, 3000);
//     }
//   }

//   render() {
//     const { pokemon, error, status } = this.state;
//     const { pokemonName } = this.props;

//     if (status === 'idle') {
//       return <div>Введите имя покемона.</div>;
//     }

//     if (status === 'pending') {
//       return <PokemonPendingView pokemonName={pokemonName} />;
//     }

//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//   }
// }
