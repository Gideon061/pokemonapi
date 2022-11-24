import { ACTIONS } from '../Context/pokemonContext'
import { useEffect, useState } from "react"
import { usePokemonContext } from "./usePokemonContext"
import { usePokemonDetail } from './usePokemonDetail';


export const usePokemonData = () =>{
    const {pokemon,dispatch} = usePokemonContext();
    const {pokemon_detail} = usePokemonDetail()

    // console.log(answer)


        useEffect(()=>{
            const pokemonData = async() =>{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1154');

                const json = await response.json()

                console.log(json)

                if(response.ok){
                    dispatch({type:ACTIONS.GET_POKEMON,payload:json.results})
                }
            }

            pokemonData()
        },[dispatch])

        return {pokemon}
    
}