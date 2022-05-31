import React,{useReducer,createContext, useContext} from 'react'
import reducer from './reducer';

const CarContext = createContext();

function AppProvider({ children }){
    const [state,dispatch] = useReducer(reducer,{
        cart: []
    })
    return(
        <CarContext.Provider value={{
            state,
            dispatch
        }}>
            { children }
        </CarContext.Provider>
    )
}

export default AppProvider;

export const GlobalContext = () =>{
    return useContext(CarContext)
}
