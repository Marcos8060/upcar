import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Fleet from "./components/Fleet";
import FleetDetail from "./components/FleetDetail";
import Search from "./components/Search";
import AppProvider from "./context";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoutes from "./components/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route element={<PrivateRoutes />}>
           <Route exact path="/detail/:id/" element={<Detail />}></Route>
          <Route exact path="/fleet/detail/:id/" element={<FleetDetail />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/fleet" element={<Fleet />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          </Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </AppProvider>
    </React.StrictMode>
  </Router>
);
