import React, { useState } from "react";
import emailjs from "emailjs-com";

const JobAlerts = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      message: "You will receive alerts for high-demand jobs based on your preferences!"
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
      .then((response) => {
        alert("Subscription successful! You will receive job alerts.");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <h3>Subscribe for Job Alerts</h3>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default JobAlerts;