import React, { useState } from "react";
import "./SubscribePage.css";

function SubscribePage() {
  const [formData, setFormData] = useState({ name: "", email: "", consent: false });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setMessage("Please accept the GDPR consent to subscribe.");
      return;
    }

    try {
      const response = await fetch("https://your-api.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setFormData({ name: "", email: "", consent: false });
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to connect to the server.");
    }
  };

  return (
    
<div>
    <div className="top-part">
     
      <div className="row">
      <h1> Newsletter signup </h1> 
    </div>
    {/* Imaginea newsletter separată */}
    </div>
    <img src="/assets/images/newsletter.webp" alt="Newsletter" className="newsletter-image" />
   

    <div className="subscribe-page">
    <div className="subscribe-container">
            {/* Box-ul cu border turcoaz */}
            <div className="subscribe-info">
            <h1>Sign up to The London Library Newsletter(clone)</h1>
            <p>Stay informed about events, collections, and exclusive updates from The London Library.</p>
            
            <form onSubmit={handleSubmit} className="subscribe-form">
                <label>
                First name:
                <input
                    type="text"
                    name="first_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </label>
                <label>

                Last name:
                <input
                    type="text"
                    name="last_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </label>

                <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </label>

                <label className="gdpr-checkbox">
                <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                />
                <p>I consent to receiving emails from The London Library. </p>
                </label>

                <button type="submit" className="subscribe-submit">
                Subscribe
                </button>
            </form>

            {message && <p className="response-message">{message}</p>}
            </div>
        </div>
    </div>
</div>
  );
}

export default SubscribePage;
