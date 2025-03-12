import React, { useState } from "react";
import "./SubscribePage.css";

function SubscribePage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    consent: false,
  });
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
    console.log("Form submitted with data:", formData);

    if (!formData.consent) {
      setMessage("Please accept the GDPR consent to subscribe.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        // Resetează formularul după succes
        setFormData({ first_name: "", last_name: "", email: "", consent: false });
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to connect to the server.");
      console.error("Subscription error:", error);
    }
  };

  return (
    <div>
      <div className="top-part">
        <div className="row">
          <h1>Newsletter signup</h1>
        </div>
      </div>

      {/* Imaginea newsletter */}
      <img
        src="/assets/images/newsletter.webp"
        alt="Newsletter"
        className="newsletter-image"
      />

      <div className="subscribe-page">
        <div className="subscribe-container">
          <div className="subscribe-info">
            <h1>Sign up to The London Library Newsletter (clone)</h1>
            <p>
              Stay informed about events, collections, and exclusive updates from
              The London Library.
            </p>

            {/* Formularul de abonare */}
            <form onSubmit={handleSubmit} className="subscribe-form">
              <label>
                First name:
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Last name:
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
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
                <p>I consent to receiving emails from The London Library.</p>
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
