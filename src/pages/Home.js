import React from "react";
import "../style/home.css"
import background from "../components/img/wo2.jpg"

const Home = () => {
    return(
        
        <div >
            <img src={background} className="bg"/>
            <h1 className="name" >Wo Westone Photography</h1>
        </div>
       
    );
};

export default Home;

