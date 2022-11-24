import {  useState } from "react"
import { useLocation } from "react-router"
import { ACTIONS } from "../Context/pokemonContext"
import { usePokemonContext } from "./usePokemonContext"
import axios from 'axios'


export const usePokemonDetail = () =>{
    const {pokemon_detail,dispatch} = usePokemonContext()
    const [isLoading,setIsLoading] = useState(false)
    const [isReady,setIsReady] = useState(false)

    const search = useLocation().search;
    const id =new URLSearchParams(search).get("pokemon");

    // console.log(id)
    const pokemonDetailFetch = async() =>{
        if(isLoading){
            await axios (`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((res)=>{
                    dispatch({type:ACTIONS.GET_POKEMON_DETAIL,payload:res.data})
                    setIsReady(true)
                    setIsLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
        pokemonDetailFetch()


            return {pokemon_detail,isLoading,setIsLoading,isReady,pokemonDetailFetch}
        }