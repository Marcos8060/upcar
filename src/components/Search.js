import React,{useEffect, useState} from 'react'
import axios from 'axios'


const url = 'http://127.0.0.1:8000/api/cars/'
function Search() {
    const search = 'search'
    const [appState,setAppState] = useState({
        search : '',
        cars: [],
    })

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/cars/' + search + '/' + window.location.search)
        .then((res) =>{
            const returnedCars = res.data;
            setAppState({cars: returnedCars })
            console.log(res.data);
        })
    },[setAppState])
  return (
    <div>Search</div>
  )
}

export default Search