import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './components/Hero';
import Detail from './components/Detail';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from './components/Cart';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <React.StrictMode>
      <Navbar />
        <Routes>
            <Route exact path='/' element={ < App />}></Route>
            <Route exact path='/detail' element={ < Detail />}></Route>
            <Route exact path='/cart' element={< Cart />}></Route>
            {/* <Route exact path='/login' element={< Login />}></Route> */}
            {/* <Route exact path='/logout' element={< Logout />}></Route> */}
            {/* <Route exact path='/profiles/:id' element={< Profile />}></Route> */}
            {/* <Route exact path='/search' element={< Search />}></Route> */}
            {/* <Route exact path='/admin/profiles' element={< Admin />}></Route> */}
            {/* <Route exact path='/edit/:id' element={< Edit />}></Route> */}
        </Routes>
    </React.StrictMode>
</Router>
);