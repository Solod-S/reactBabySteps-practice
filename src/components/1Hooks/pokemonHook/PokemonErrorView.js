import errorImage from './error.jpg';
import React from "react";
export default function PokemonErrorViewHook({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
}
