import { usePokemonContext } from "./usePokemonContext"
import { ACTIONS } from '../Context/pokemonContext'
import { useEffect, useState } from "react"


export const useBerryData = () =>{
    const {berry,dispatch} = usePokemonContext()
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        const pokeData = async() =>{
            const response = await fetch('https://pokeapi.co/api/v2/berry/')
            const json = await response.json()

    
            if(response.ok){
                dispatch({type:ACTIONS.GET_BERRY,payload:json.results})
                setIsLoading(true)
            }
    
            if(!response.ok){
                throw Error("Error")
            }
        }
    
        pokeData()
    },[dispatch])


    return {berry,isLoading}

    
}