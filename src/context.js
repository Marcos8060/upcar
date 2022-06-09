import React,{useReducer,createContext, useContext,useState,useEffect} from 'react'
import reducer from './reducer';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const CarContext = createContext();

function AppProvider({ children }){
    const history = useNavigate();
    let [ authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):(null))
    let [ user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')):(null))
    let [loading,setLoading] = useState(true)
    const [currentStep,setCurrentStep] = useState(1)
    const [userData,setUserData] = useState([])
    const [finalData,setFinalData] = useState([])

    const [state,dispatch] = useReducer(reducer,{
        cart: [],
        info: []
    })


    let loginUser = async(e) =>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
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

    let logoutUser = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history('/login')
    }


    let updateToken = async()=>{
        console.log('updated token called');
        let response = await  fetch('http://127.0.0.1:8000/api/token/refresh/',{
            method: 'POST',
            headers:{ 
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ 'refresh':authTokens?.refresh})
        })
        let data = await response.json();
        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser();
        } 

        if(loading){
            setLoading(false)
        }
    }


    useEffect(() =>{

        if(loading){
            updateToken();
        }
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() =>{
            if(authTokens){
                updateToken();
            }
        },fourMinutes)
        return () => clearInterval(interval)
    },[authTokens, loading])

    let contextData = {
        authTokens: authTokens,
        user: user,
        state: state,
        loginUser: loginUser,
        logoutUser: logoutUser,
        dispatch: dispatch,
        currentStep,
        setCurrentStep,
        userData,
        setUserData,
        finalData,
        setFinalData
    }

    return(
        <CarContext.Provider value={contextData}>
            {loading ? null : children }
        </CarContext.Provider>
    )
}

export default AppProvider;

export const GlobalContext = () =>{
    return useContext(CarContext)
}
