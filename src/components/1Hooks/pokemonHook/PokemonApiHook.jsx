import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonFormHook from './PokemonForm';
import PokemonInfoHook from './PokemonInfo';


export default function PokemonAppHook () {

  const [pokemonName, SetpokemonName] =useState()


  
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonFormHook onSubmit={SetpokemonName} />
        <PokemonInfoHook pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
