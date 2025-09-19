import React, { useState, useEffect } from "react";
import { useNewsletter } from "../hooks/useNewsletter";

const SignUpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    zipcode: "",
    country: "",
  });

  const { isLoading, notification, initEmailJS, handleEmailSubscription } =
    useNewsletter();

  useEffect(() => {
    initEmailJS();
  }, [initEmailJS]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleEmailSubscription(formData);
    // Reset form
    setFormData({
      email: "",
      name: "",
      zipcode: "",
      country: "",
    });
  };

  return (
    <section id="Sign-up" className="container">
      <h2 className="text-center text-xxl text-gold-mid">
        Subscribe for the Latest Dune News
      </h2>

      <p className="text-center text-lg">
        Stay updated with the latest news, book releases, and movie updates from
        the Dune universe.
      </p>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="zipcode">Postal (Zip) Code</label>
            <input
              type="number"
              id="zipcode"
              name="zipcode"
              placeholder="Enter your zip code"
              value={formData.zipcode}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-action">
            <button type="submit" className="btn btn-gold" disabled={isLoading}>
              <i className="fas fa-paper-plane"></i>
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </div>
        </form>

        {/* Notification */}
        {notification.show && (
          <div className={`notification notification-${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default SignUpSection;
