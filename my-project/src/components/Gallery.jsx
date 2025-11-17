import React, { useState, useEffect } from "react";
import "./Gallery.css";
import banner from "../assets/theme.jpg";
import img1 from "../assets/event3.jpg";
import img3 from "../assets/event1.jpg";
import img4 from "../assets/events.jpg";
import img5 from "../assets/we.jpg";
import img6 from "../assets/yes.jpg";
import img7 from "../assets/event2.jpg";
import img8 from "../assets/we1.jpg";
import img9 from "../assets/event4.jpg";
import img10 from "../assets/event5.jpg";
import img11 from "../assets/event6.jpg";
import img12 from "../assets/event7.jpg";
import img13 from "../assets/event8.jpg";
import img14 from "../assets/event10.jpg";


const Gallery = () => {
  const [animate, setAnimate] = useState(false);
  const images = [     img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14
  ];
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); 
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
        <section
          className="about-hero1 "
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="hero-overlay">
            <h1>Gallery</h1>
          </div>
        </section>
        <div className="gallery-page">     
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div className="gallery-item" key={index}>
                <img src={src} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
