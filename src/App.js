import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"


function App() {
    return ( 
        <Router>
            <div className = "App" >
            <Switch>

                <Route path="/checkout">
                    <Header />
                    <h1>checkout</h1>
                    <Checkout />
                </Route>

                <Route path="/login">
                    <h1>Login page</h1>
                </Route>

                <Route path="/">
                    <Header /> 
                   
                    <Home />

                </Route>

            </Switch>
        {/* WE NEED 'React-ROUTER'*/ }
        {/* localhost.com*/ }
        {/* localhost.com/login */ }
        {/* localhost.com /checkout */}

    </div></Router>
    
    );
}

export default App;