import { createContext,useReducer } from "react";

export const PokemonContext = createContext();

export const ACTIONS = {
    GET_BERRY : 'get_data_berry',
    GET_POKEMON: 'get_data_pokemon',
    GET_POKEMON_DETAIL: 'get_data_pokemon_detail'
}

const pokemonReducer = (state,action) =>{
    switch(action.type){
        case ACTIONS.GET_BERRY:
            return{
                berry:action.payload
            }
        case ACTIONS.GET_POKEMON:
            return{
                pokemon:action.payload
            }
        case ACTIONS.GET_POKEMON_DETAIL:
            return{
                pokemon_detail:action.payload
            }
        default:
            return state 
    }
}

export const PokemonContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(pokemonReducer,{
        pokemon:[],
        berry:[],
        pokemon_detail:[]
    })

    return (
        <PokemonContext.Provider value={{...state,dispatch}}>
            {children}
        </PokemonContext.Provider>
    )
}