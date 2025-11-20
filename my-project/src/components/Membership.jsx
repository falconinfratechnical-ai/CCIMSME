
import React, { useState, useEffect } from "react";
import "./Membership.css"
import banner from "../assets/theme.jpg";
import { useNavigate } from "react-router-dom"

const Membership = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
 const handleBuy = () => {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSf3IpAiWu1dJzKRT_7d3MTKWQJzS-_OAQ3zF5ScWoL_GmCwbw/viewform?usp=preview", "_blank");
};
  const plans = [
   {
      "name": "Platinum",
      "price": "Rs.1,00,000",
      "gst": "  gst Included(18%) ",
      "features": [
        "✔️ Five tickets to attend each of the Chamber signature events of your choice.",

        "✔️ platinum Sponsorship to one Chamber Business Conference of your choice.",
        "✔️ B2B and B2C referrals.",
        "✔️ Access to senior leadership of the Chamber.",
        "✔️ Initial one-on-one meeting with Chamber Chairman and Chair Elect.",
        "✔️ Customized enterprise-level service support and corporate strategic activities.",
        "✔️ Special invitations to member-only opportunities, meetings, and events.",
        "✔️ Ribbon cutting and letters of support.",
        "✔️ Free tickets for other Chamber-hosted events.",
        "✔️ Other discounts on products/services for Chamber Members.",
        "✔️ Introductory announcement in the Chamber’s weekly newsletter.",
        "✔️ Unlimited advertisements in the Chamber’s newsletters and/or social media .",

      ]
    },


    {
      "name": "Executive",
      "price": "Rs.25,000",
      "gst": "  gst Included(18%) ",
      "features": [
        "✔️ Five tickets to attend each of the Chamber signature events of your choice.",
        "✔️ Gold Sponsorship of the Annual Awards Banquet .",
        "✔️ B2B and B2C referrals.",
        "✔️ Access to senior leadership of the Chamber.",
        "✔️ Special invitations to member-only opportunities, meetings, and events.",
        "✔️ Ribbon cutting and letters of support.",
        "✔️ Free tickets for other Chamber-hosted events.",
        "✔️ Other discounts on products/services for Chamber Members.",
        "✔️ Introductory announcement in the Chamber’s weekly newsletter .",
        "✔️ Sixteen advertisements in the Chamber’s newsletters and/or social media .",
        "✔️ Increased branding opportunities.",
        "🚫Access to senior leadership of the Chamber.",
        "🚫 Customized enterprise-level service support and corporate strategic activities."
      ]
    },
     {
      "name": "Silver",
      "price": "Rs.10,000",
      "gst": "  gst Included (18%) ",
      "features": [
        "✔️ Two tickets to attend 3 Chamber signature events of  your choice .",
        "✔️ Two tickets to attend the Annual Awards Banquet.",
        "✔️ B2B and B2C referrals.",
        "✔️ Special invitation to member-only opportunities, meetings, and events.",
        "✔️ Ribbon cutting and letters of support.",
        "✔️ Discounted pricing for other Chamber-hosted or co-sponsored events.",
        "✔️ Other discounts on products/services for Chamber Members.",
        "✔️ Introductory announcement in the Chamber's weekly newsletter .",
        "✔️ Six advertisements in the Chamber’s newsletters and/or social media .",
        "🚫 Increased branding opportunities.",
        "🚫Access to senior leadership of the Chamber.",
        "🚫 Customized enterprise-level service support and corporate strategic activities."
      ]
    },
    {
      "name": "Primary",
      "price": "Rs. 500",
      "gst": "  gst Included (18%) ",
      "features": [
        "✔️ Two tickets to attend 3 Chamber signature events of  your choice .",
        "✔️ Two tickets to attend the Annual Awards Banquet.",
        "✔️ B2B and B2C referrals.",
        "🚫  Special invitation to member-only opportunities, meetings, and events.",
        "🚫 Ribbon cutting and letters of support.",
        "🚫 Discounted pricing for other Chamber-hosted or co-sponsored events.",
        "🚫 Other discounts on products/services for Chamber Members.",
        "🚫 Introductory announcement in the Chamber's weekly newsletter .",
        "🚫 Six advertisements in the Chamber’s newsletters and/or social media .",
        "🚫 Increased branding opportunities.",
        "🚫Access to senior leadership of the Chamber.",
        "🚫 Customized enterprise-level service support and corporate strategic activities."
      ]
    },

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
          className="about-hero1"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="hero-overlay">
            <h1>MemberShip</h1>
          </div>
        </section>
        <div className="membership-page">

          <div className="plans-container">
            {plans.map((plan, index) => (<div className={`plan-box ${plan.name.toLowerCase()}`} key={index}>
              <div className="plan-content">
                <h2>{plan.name}</h2>
                <h3 className="price">{plan.price}</h3>
                <p className="gst">{plan.gst}</p>
                <hr />
                <p className="Validity"> Validity- {plan.validity}</p>
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="buy-btn" onClick={() => handleBuy(plan)}>REGISTER</button>
            </div>))}
          </div>

        </div>

      </div>
    </>
  )
}
export default Membership;