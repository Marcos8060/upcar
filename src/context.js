import React,{useReducer,createContext, useContext,useState} from 'react'
import reducer from './reducer';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const CarContext = createContext();

function AppProvider({ children }){
    const history = useNavigate();
    let [ authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):(null))
    let [ user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):(null))

    const [state,dispatch] = useReducer(reducer,{
        cart: []
    })

    let loginUser = async(e) =>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                 accept: 'application/json',

            },
            body: JSON.stringify({ 'username':e.target.username.value, 'password': e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history('/')
        }else{
            alert('Something went wrong')
        }

    }
    console.log(user.username);
    return(
        <CarContext.Provider value={{
            state,
            dispatch,
            loginUser,
            user
        }}>
            { children }
        </CarContext.Provider>
    )
}

export default AppProvider;

export const GlobalContext = () =>{
    return useContext(CarContext)
}
