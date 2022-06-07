import React,{useState,useEffect} from 'react'
import './css/fleet.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SearchBar from "material-ui-search-bar";
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';


const url = 'http://127.0.0.1:8000/api/cars/'
function Fleet() {
    const history = useNavigate();
    const [cars,setCars] = useState([])
    const [data, setData] = useState({ search: "" });
    const [loading,setLoading] = useState(false)


    useEffect(() =>{
      setLoading(true)
        axios.get(url)
        .then((res) =>{
            setCars(res.data)
            setLoading(false)
        })
    },[])

    if(loading){
      return(
        <div>
          <h3 className='text-center loading'>Loading...</h3>
        </div>
      )
    }

     // search function
  const goSearch = (e) => {
    history({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };
  return (
    <div className='app__fleet'>
       <Navbar />
        <div className="container">
        <SearchBar
              style={{
                margin: "0 auto",
                maxWidth: 700,
                borderRadius: 30,
                boxShadow: "0px 1px 8px 1px lightgray",
              }}
              placeholder="Search by brand..."
              value={data.search}
              onChange={(newValue) => setData({ search: newValue })}
              onRequestSearch={() => goSearch(data.search)}
            />
            <div className="row fleets">
                {cars.map((car) =>(
                    <div className="col-md-4" style={{ marginBottom: '7vh'}} key={car.id}>
                    <div>
                        <img className='img-fluid fleetImg' src={car.image} alt="" />
                        <div className="footer">
                          <p>{car.name}</p>
                          <p className='price'>$ {car.price}/day</p>
                          <p className='gray'>Pieces of luggage: {car.luggage}</p>
                          <p className='gray'>Doors: {car.doors}</p>
                          <p className='gray'>Maximum passengers: {car.passengers}</p>
                          <Link to={`detail/${car.id}`} className='btn viewBtn'>View Detail</Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Fleet