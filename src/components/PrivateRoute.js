import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../context';

const PrivateRoutes = () =>{
    let { user } = GlobalContext();
    return(
        
     user ? <Outlet /> : <Navigate to='/login' /> 
    )
}

export default PrivateRoutes;