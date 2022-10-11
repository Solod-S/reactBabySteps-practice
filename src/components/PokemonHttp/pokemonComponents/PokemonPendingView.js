import { ImSpinner, ImSpinner2 } from 'react-icons/im';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './icon-spin.css';
import React from 'react';
import PokemonDataView from './PokemonDataView';
import pendingImage from './pending.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  animation: {
    animation: 'spin infinite 5s linear',
  },
};

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="fa-spin" />
        Загружаем...
        <ImSpinner2 size="32" className="icon-spin" />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
