
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Membership-form.css";

const MembershipForm = () => {
     const location = useLocation();
     const navigate = useNavigate();
     const plan = location.state?.plan || {}

     const [formData, setFormData] = useState({

          firstName: "",
          address: "",
          email: "",
          businessFirm: "",
          businessAddress: "",
          phone: ""
     });

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((s) => ({ ...s, [name]: value }));
     }
const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch("http://localhost:5000/api/membership", {
            method: "POST", 
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Network error");
        }

        await response.json();
        alert("Membership form submitted successfully!");
        navigate("/payment-options", { state: { plan, member: formData } });
        
    } catch (err) {
        console.error("Error submitting membership form:", err);
        alert("Error submitting form. Please try again.");
    }
};

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
     return (
          <div className="form-page">
               <div className="form-container">
                    <h1>Buy {plan.name || "Membership"} plan</h1>
                    <form onSubmit={handleSubmit} >
                         <div className="form-group">
                              <label>Full Name*</label>
                              <input name="firstName" 
                              value={formData.firstName} 
                              onChange={handleChange} 
                              type="text" 
                              placeholder="Enter Your Full Name" required />
                         </div>
                         <div className="form-group">
                              <label>Address*</label>
                               <input name="address" 
                               value={formData.address} 
                               onChange={handleChange} 
                               type="text" 
                               placeholder="Enter Your Address" />
                         </div>
                         <div className="form-group">
                              <label>Email ID*</label>
                              <input name="email" 
                              value={formData.email} 
                              onChange={handleChange} 
                              type="email" 
                              placeholder="Enter Your Email ID" />
                         </div>
                          <div className="form-group">
                              <label>Business Firm Name*</label>
                              <input name="businessFirm" 
                              value={formData.businessFirm} 
                              onChange={handleChange} 
                              type="text" 
                              placeholder="Enter firm name" required />
                         </div>
                         <div className="form-group">
                              <label>Business address*</label>
                              <input name="businessAddress"
                              value={formData.businessAddress}
                              onChange={handleChange}
                              type="text" 
                               placeholder="Business address" />
                         </div>
                         <div className="form-group">
                              <label>Phone No.*</label>
                              <input 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              type="tel" 
                              placeholder="Enter Your Phone No." />
                         </div>
                         <div className="form-buttons">
                              <button
                                   type="button"
                                   className="cancel-btn"
                                   onClick={() => navigate(-1)}>
                                   CANCEL
                              </button>
                              <button
                                   type="submit"
                                   className="submit-btn">
                                  submit
                              </button>
                         </div>
                    </form>

               </div>
          </div>
     )

}

export default MembershipForm;
