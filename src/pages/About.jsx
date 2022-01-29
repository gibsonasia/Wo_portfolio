import React from "react";
import "../style/about.css"
import woProfile from "../components/img/woProfile.jpg"

const About = () => {
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">

                    <h2 className="intro-greeting">Welcome! I am</h2>
                    <h1 className="intro-name">Willie L. "Wo" Westone</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                        <div className="intro-title-item"> Photographer </div>
                        <div className="intro-title-item"> Cinematographer </div>
                        <div className="intro-title-item"> Artist </div>
                        </div>
                    </div>
                    <p className="intro-desc">
                    Full time post production guy and off-the-beat artist obsessed with all things visual storytelling.
                    I went to a very cinematography-oriented film school. 
                    Bought my first film camera off of craigslist back in 2012 and took to shooting as a hobby and a way to practice lighting and composition. 
                    It's only in the last few years that I've really become serious about the craft and using this medium in my art. 
                    I'm a student of the lens with a hope to capture all that's possible within a single frame.
                    </p>
                </div>
            </div>

        
            <div className="intro-right">
                <div className="i-bg"></div>
                <img src={woProfile} alt="" className="intro-image" />
            </div>
        </div>
    )
}

export default About;