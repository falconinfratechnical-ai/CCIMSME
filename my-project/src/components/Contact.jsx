import React, { useState ,useEffect} from "react";
import "./Contact.css";
import banner from "../assets/theme.jpg";

const Contact = () => {
    const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
 const API_URL = import.meta.env.VITE_API_URL;


        const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };
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
              <h3></h3>
              <p>
                Chamber of commerce and industry for MSME (CCIMSME), <br />
                ISC,Falcon Infrastructure ltd, Door No. XVI/128,puthiya<br/>
                road jn.Eloor udhyogamandal 
                P.O., Cochin-683501,
              </p>
              <p>
                📞 <a  href="tel:+914522626751"> +91 9497715888</a> 
               
              </p>
              <p>
                📧{" "}
                <a href="mailto:info@ccimsme.com?subject=Website%20Contact">
                 info@ccimsme.com
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
                📞 <a href="tel:+914435669124"> 9497715888</a>
              </p>
              <p>
                📧{" "}
               <a href="mailto:chairman@ccimsme.com?subject=Website%20Enquiry">                  chairman@ccimsme.com
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>  <br/>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
