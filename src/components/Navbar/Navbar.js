import "./navbar.scss"
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar">
            
            <ul className="nav-links">
                <li>
                    <Link to="/portfolio" className="nav-link active">
                        portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">
                        about
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}