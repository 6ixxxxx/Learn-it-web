import React from "react";
import "./Hero.css"
import HeroImg from "../images/maintain.png"
import { NavLink } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Hero({myTheme}) {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <div className="hero" data-theme={myTheme}>
            <div className="mask"></div>
            <div className="hero--content">

                <div className="hero--content-text" data-aos="fade-in"
                data-aos-easing="ease-in-sine">
                    <h3>HELLO</h3>
                    <h1>WE ARE <span>LEARN IT</span></h1>
                    <h4>YOUR FAVOURITE ONLINE TUTORS</h4>
                    <NavLink to="/sign-up"><button className="btn">Start to study</button></NavLink>
                </div>
                <div className="hero--content-img">
                    <img src={HeroImg} alt="a child reading" className="hero--image"/>
                </div>
                
            </div>
        </div>
        
    )
}