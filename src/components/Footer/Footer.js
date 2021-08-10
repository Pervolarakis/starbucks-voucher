import React from 'react';
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

const Footer = props => {
    return(
        <footer className="footer footerStyle">
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                
                <div className="footerSocial"><FaFacebookF color="white" size="1.5em"/></div>
                <div className="footerSocial"><FaTwitter color="white" size="1.5em"/></div>
                <div className="footerSocial"><FaInstagram color="white" size="1.5em"/></div>
                <div className="footerSocial"><FaYoutube color="white" size="1.5em"/></div>
                <div className="footerSocial"><FaPinterestP color="white" size="1.5em"/></div>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: "24px"}}>
                <p className="footerNavItem">Πολιτική απορρήτου</p>
                <p className="footerNavItem">Όροι χρήσης</p>
                <p className="footerNavItem">Στείλτε μας τις ιδέες σας</p>
                <p className="footerNavItem">Προτιμήσεις Cookies</p>
                
            </div>
            <p style={{marginTop: "8px", fontSize: 16, fontWeight: 600, color: "#707070"}}>© 2020 Starbucks Coffee Company. All rights reserved.</p>

        </footer>
    )
}

export default Footer;