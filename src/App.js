import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route,Redirect } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar/Navbar";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


class App extends Component {
  render(){
    return (
      
      <Router> 

      <div className="App">
      <Navbar /> 
      </div>

      <Routes>
          <Route>
            
            <Route path="/Home" element={<Home />} /> 
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/About" element ={<About />}/>
            <Route path="/Contact" element ={<Contact />}/>
            
            
          </Route>
        </Routes>
      </Router> 
       
    );
  }
}

export default App;
