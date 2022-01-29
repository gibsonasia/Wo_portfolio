import "./navbar.css"
import { MenuItems } from "./MenuItems";
import React, {Component} from "react";

import { Link } from "react-router-dom";


class Navbar extends Component {

    state = {active: false}

    /* HANDLE CLICK of menu button */
    handleClick = () =>{
        this.setState({active: !this.state.active})
    } 

    render (){
        return(
        <nav className="navbar">
            <h1 className="navbar-logo">Wo Westone<i class="fas fa-camera-retro"></i>
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>

                {/*check whether menu item is clicked will switch icons when clicked*/}
                <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>

            <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                
                {/* Maps to the array on MenuItems.js */}
                {MenuItems.map(( item, index ) => {
                    return (
                        <li key={index}> 
                            <Link to={item.url} className={item.cName}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
                
            </ul>
            
        </nav>
            
    )
}
}

export default Navbar