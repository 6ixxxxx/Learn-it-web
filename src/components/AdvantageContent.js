import React from "react";
import "./AdvantageContent.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";



export default function AdvantageContent(props) {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <div className="advantage--content" data-aos="flip-left">
            <h3 className="number">{props.time}</h3>
            <p className="text">{props.text}</p>
        </div>
    )
}