import React from 'react'
import { usePokemonData } from '../Hooks/usePokemonData';
import DropdownLists from './DropdownLists';
import { useState } from 'react';

function BerryFilter() {
    const {pokemon} = usePokemonData()
  
    const [berryValue,setBerryValue] = useState([])
  
    console.log(pokemon)
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(berryValue)
    }
    return (
      <div className="App">
        <form action='POST' onSubmit={handleSubmit}>
        <input list='pokemon' name='pokemon' onChange={(e)=>setBerryValue(e.target.value)} value={berryValue} />
        <datalist id='pokemon'>
        {pokemon && pokemon.map((item)=>{
          return <DropdownLists berry = {item} />
        })}
        </datalist>
        <button>Submit</button>
        {berryValue && pokemon
        .filter((pokemons)=>pokemons.name === String(berryValue).toLowerCase())
        .map((item)=>{
          return(
            <div>
            <p>{item.name}</p>
            <p>{item.url}</p>
            </div>
          )
        })}
        </form>
      </div>
    );
  }

export default BerryFilter