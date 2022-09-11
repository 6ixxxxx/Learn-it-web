import React from "react";
import "./AdvantageContent.css"
import AdvantageContent from "./AdvantageContent";
import AdvantagesData from "./AdvantagesData"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function AdvantageCard({myTheme}) {

    
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    
    return(
        <div className="advantage" data-aos="slide-up" data-theme={myTheme}>
            <h1 className="advantage--heading">WHAT YOU STAND TO BENEFIT</h1>
            <div className="advantage--container">
                {
                    AdvantagesData.map((val, ind) => {
                        return(
                            <AdvantageContent
                                key={ind}
                                time={val.time}
                                text={val.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}