import React from "react";
import "./Footer.css"
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"


export default function Footer({myTheme}) {
    return(
        <div className="footer"  data-theme={myTheme}>
            <div className="footer--container">
                <p><span>Learn it</span>with us</p>
                <h3>Follow us</h3>
                <div className="footer--icon">
                    <FaLinkedin size={20} />
                    <FaFacebook size={20} />
                    <FaTwitter size={20} />
                    <FaInstagram size={20} />
                </div>
               
                <h6>Copyright (c) {`${new Date().getFullYear()}`} All rights reserved || This was designed by <a href="https://6ixxxxx.github.io/portfolio-6ixxxxx">6ixxxxx</a></h6>
            </div>
        </div>
    )
}