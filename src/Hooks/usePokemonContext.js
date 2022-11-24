import { useContext } from "react"
import { PokemonContext } from "../Context/pokemonContext"

export const usePokemonContext = () =>{
    const context = useContext(PokemonContext);

    if(!context){
        throw Error("Please use context inside useContext")
    }

    return context
}