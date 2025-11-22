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
import img15 from "../assets/event11.jpg";
import img16 from "../assets/event12.jpg";
import img17 from "../assets/event13.jpg";
import img18 from "../assets/event14.jpg";
import img19 from "../assets/event15.jpg";
import img20 from "../assets/event16.jpg";
import img21 from "../assets/event17.jpg";
import img22 from "../assets/event18.jpg";
import img23 from "../assets/event19.jpg";
import img24 from "../assets/event20.jpg";
import img25 from "../assets/event21.jpg";
import img26 from "../assets/event22.jpg";
import img27 from "../assets/event23.jpg";


const Gallery = () => {
  const [animate, setAnimate] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    img15,img16,img17,img18,img19,img20,img21,img22,img23,img25
    ,img24,img26,img27
    ,img1, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImg = () =>
    setLightboxIndex((lightboxIndex + 1) % images.length);

  const prevImg = () =>
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);

  return (
    <>
      <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
        <section
          className="about-hero1"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="hero-overlay">
            <h1>Gallery</h1>
          </div>
        </section>

        <div className="gallery-page">
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div
                className="gallery-item"
                key={index}
                onClick={() => openLightbox(index)}
              >
                <img src={src} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox">
          <span className="lightbox-close" onClick={closeLightbox}>×</span>
          <span className="lightbox-arrow left" onClick={prevImg}>❮</span>
          <div className="lightbox-content">
            <img src={images[lightboxIndex]} alt="" />
          </div>
          <span className="lightbox-arrow right" onClick={nextImg}>❯</span>
        </div>
      )}
    </>
  );
};

export default Gallery;
