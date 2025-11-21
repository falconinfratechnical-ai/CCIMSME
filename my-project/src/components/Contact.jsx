import React, { useState, useEffect } from "react";
import "./Contact.css";
import banner from "../assets/theme.jpg";
import QR from "../assets/qr.jpeg"

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //     console.log("VITE_API_URL = ", import.meta.env.VITE_API_URL);

  //   try {
  //     const API_URL = import.meta.env.VITE_API_URL;

  //     if (!API_URL) {
  //       alert("API URL not configured");
  //       setLoading(false);
  //       return;
  //     }

  //     console.log("Submitting to:", `${API_URL}/api/contact`);
  //     console.log("Data:", formData);

  //     const response = await fetch(`${API_URL}/api/contact`, {
  //       method: "POST",
  //       headers: { 
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok && data.success) {
  //       alert("✅ Your message has been sent successfully!");
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //       });
  //     } else {
  //       alert("❌ " + (data.message || "Something went wrong. Please try again."));
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("❌ Network error. Please check your connection and try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`activity-wrapper ${animate ? "page-enter" : ""}`}>
      <section
        className="about-hero1"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      <div className="contact-container">
        <h2 className="contact-title">Have Any Question?</h2>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-block">
              <h3>Head Office</h3>
              <p>
                Chamber of commerce and industry for MSME (CCIMSME), <br />
                ISC, Falcon Infrastructure ltd, Door No. XVI/128, puthiya<br />
                road jn. Eloor udhyogamandal
                P.O., Cochin-683501,
              </p>
              <p>
                📞{" "}
                <a href="tel:+919497715888">
                  +91 9497715888
                </a>
              </p>
              <p>
                📧{" "}
                <a href="mailto:ccimsme@gmail.com?subject=Website%20Contact">
                  ccimsme@gmail.com
                </a>
              </p>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>

            <div className="contact-block">
              <h3>Chairman</h3>
              <p>
                NA Muhammed Kutty<br />
                CCIMSME
              </p>
              <p>
                📞{" "}
                <a href="tel:+919497715888">
                  +91 9497715888
                </a>
              </p>
              <p>
                📧{" "}
                <a
                  href="mailto:ccimsme@gmail.com?subject=Website%20Contact"
                  rel="noopener noreferrer"
                >
                  ccimsme@gmail.com
                </a>
              </p>
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2 className="scan">Scan Me</h2>
            <img
              src={QR}
              alt="Scan QR"
              className="qr-image"
            />

            <div className="contact-buttons">
              <button
                className="email-btn"
                onClick={() => {
                  window.location.href = "mailto:ccimsme@gmail.com";
                }}
              >
                📧 Email Us
              </button>

              <button
                className="wa-btn"
                onClick={() => window.open("https://wa.me/919497715888", "_self")}
              >
                💬 WhatsApp
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;