import React, { useState, useEffect } from 'react';
import PokemonDataViewHook from './PokemonDataView';
import PokemonErrorViewHook from './PokemonErrorView';
import PokemonPendingViewHook from './PokemonPendingView';

import pokemonAPI from './services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfoHook ({pokemonName}) {

const [pokemon, setPokemon] = useState(null)
const [error, setError] = useState(null)
const [status, setStatus] = useState(Status.IDLE)

 
  useEffect(()=>{
    if(!pokemonName) {
      return
    }
    setStatus(Status.PENDING );
    
    pokemonAPI
          .fetchPokemonHook(pokemonName)
          .then(pokemon => { setPokemon( pokemon, ); setStatus(Status.RESOLVED)})
          .catch(error => { setError( error); setStatus(Status.REJECTED)});
      
  }, [pokemonName]) 

  


    if (status === Status.IDLE) {
      return <div>Введите имя покемона.</div>;
    }

    if (status === Status.PENDING) {
      return <PokemonPendingViewHook pokemonName={pokemonName} />;
    }

    if (status === Status.REJECTED) {
      return <PokemonErrorViewHook message={error.message} />;
    }

    if (status === Status.RESOLVED) {
      return <PokemonDataViewHook pokemon={pokemon} />;
    }
  }

