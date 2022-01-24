import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

import Navbar from "./components/Navbar/Navbar";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


class App extends Component {
  render() {
    return (
      
      <Router>
        
        <Navbar/>
        
        <Routes>
          <Route>
            
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
