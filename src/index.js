import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokemonContextProvider } from './Context/pokemonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonContextProvider>
    <App />
    </PokemonContextProvider>
  </React.StrictMode>
);


