import React from "react";
import "./Footer.css";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AboutDropdown from "./AboutDropdown";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>ABOUT US</h3>
          <p>
       Lead entrepreneurs through a well-trodden path. And through that, make the comprehensive development of Kerala possible and take enterprises in Kerala to the level of international exports. This is the objective of the Chamber of Commerce and Industry for MSME.

For this, in keeping with the technological advances of our age, the Chamber has made available to its members a software application called Aptibo with Artificial Intelligence (AI) for the assistance of entrepreneurs. The Chambers members within the country and abroad can access this facility online. The Chambers aim is to facilitate total support for entrepreneurship. 
          </p>
          <div className="social-icons">
            <a href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_
            PBgBmYAfL&q=facebook&oq=face&gs_lcrp=EgZjaHJvbWUqEwgBEC4YgwEYxwEYsQMY0QMYgAQyDAgAEEUY
            ORixAxiABDITCAEQLhiDARjHARixAxjRAxiABDINCAIQABiDARixAxiABDIKCAMQABixAxiABDIKCAQQABixA
            xiABDIKCAUQABixAxiABDIHCAYQABiPAjIHCAcQABiPAtIBCTQyMTNqMGoxNagCCLACAfEFU6Lxxcj_
            xzc&sourceid=chrome&ie=UTF-8" target="_blank"
rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.youtube.com/" target="_blank"
rel="noopener noreferrer"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="/">Welcome</a></li>
              <li><AboutDropdown /></li>
            <li><a  href="/activity">Our Activities</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="footer-column">
          <h3>CONTACT US</h3>
          <p><FaMapMarkerAlt />  Chamber of commerce and industry for MSME (CCIMSME), 
                ISC,Falcon Infrastructure ltd, Door No. XVI/128,puthiya
                road jn.Eloor udhyogamandal 
                P.O., Cochin-683501,Phone:+91 9447055444</p>
          <p><FaPhoneAlt /> +91 9496044555,+91 9496044555,<br/>+91 9496044555</p>
          <p><FaEnvelope />  info@ccimsme.com</p>
        </div>

        {/* CENTENARY CELEBRATIONS */}
        {/* <div className="footer-column">
          <h3>CENTENARY CELEBRATIONS</h3>
          <p>
            As part of its centenary celebrations, the Chamber is hosting events and initiatives
            to reflect on its journey and set a vision for the future. These activities aim to
            inspire businesses and communities across kerala
          </p>
        </div> */}

      </div>
    </footer>
  );
};

export default Footer;
