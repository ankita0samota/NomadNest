import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const checkSpam = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 1. Enhanced Keywords
    const spamKeywords = ["win", "won", "winner", "free", "offer", "money", "click", "prize", "lottery", "urgent"];
    const lowerMessage = message.toLowerCase();
    const hasSpamKeyword = spamKeywords.some(keyword => lowerMessage.includes(keyword));

    // 2. ALL CAPS Detection (ignoring non-alphabetic chars)
    const isAllCaps = message === message.toUpperCase() && /[A-Z]/.test(message);

    // 3. Repeated Symbols Detection (e.g., !!! or ???)
    const hasRepeatedSymbols = /([!?.])\1{2,}/.test(message);

    if (hasSpamKeyword || isAllCaps || hasRepeatedSymbols) {
      setStatus("Spam detected 🚫");
    } else {
      setStatus("Message sent successfully ✅");
    }
  };

  return (
    <section className="contact">
      <div className="contact-badge">Contact Us</div>

      <div className="contact-info">
        <p>
          <strong>Contact No:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Email:</strong> support@nomadnest.com
        </p>
      </div>

      <form className="contact-form" onSubmit={checkSpam}>
        <input type="text" placeholder="Name" required />

        <input type="email" placeholder="Email" required />

        <input type="tel" placeholder="Phone" required />

        <textarea 
          placeholder="Message" 
          rows="5" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>

        {status && (
          <div className="status-message" style={{ 
            marginTop: '15px', 
            fontSize: '18px', 
            fontWeight: '600',
            color: status.includes('🚫') ? '#d9534f' : '#5cb85c'
          }}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;
