import React, { useState } from 'react'
import { usePokemonData } from '../Hooks/usePokemonData'
import { usePokemonDetail } from '../Hooks/usePokemonDetail'

import { useNavigate } from 'react-router'



const Pokedex = () => {

    const [pokemonValue,setPokemonValue] = useState('')
    const {pokemon} = usePokemonData()
    const {pokemon_detail,setIsLoading,isReady} = usePokemonDetail(pokemonValue)

    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsLoading(true)
        navigate({
            pathname: '/pokedex',
            search: `?pokemon=${pokemonValue}`,
          })
    }

  return (
    <main>
      <div className='container'>
        {!isReady && <form onSubmit={handleSubmit} >
        <input list='pokemon' name='pokemon' onChange={(e)=>setPokemonValue(e.target.value)} placeholder='Name / Number'  />
        <datalist id='pokemon'>
        {pokemon && pokemon.map((item)=>{
          return <option>{item.name}</option>
        })}
        </datalist>
        <button type='submit'>Search</button>
        </form>}
        {isReady && 
        <div>
            <p>{pokemon_detail.name}</p>
            <img alt='front' src={pokemon_detail.sprites.front_default} />
            <img alt='back' src={pokemon_detail.sprites.back_default} />

        </div>
            }
            </div>
    </main>
  )
}

export default Pokedex