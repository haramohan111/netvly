"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Web application");
  const [message, setMessage] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const subject = `New project inquiry from ${name || "website visitor"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${type}`,
      "",
      message,
    ];
    const mailtoLink =
      "mailto:hello@netvly.com" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoLink;

    setToastText(
      `${name ? name.split(" ")[0] + ", your" : "Your"} email app should now open with the message ready — just hit send to reach hello@netvly.com.`
    );
    setShowToast(true);
    setFormMsg(`${name ? name.split(" ")[0] + ", thanks" : "Thanks"} — we'll reply within a day.`);

    setName("");
    setEmail("");
    setType("Web application");
    setMessage("");
  }

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field-row">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="type">Project type</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option>Web application</option>
            <option>Mobile app</option>
            <option>Web + mobile</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            rows={4}
            placeholder="What are you building, and by when?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="submit-row">
          <button type="submit" className="btn-grad">
            Send message
          </button>
          <span id="form-msg">{formMsg}</span>
        </div>
      </form>

      <div className={`toast-overlay ${showToast ? "show" : ""}`} onClick={(e) => {
        if (e.target === e.currentTarget) setShowToast(false);
      }}>
        <div className="toast-card">
          <div className="toast-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12l5 5L20 6"
                stroke="#fff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3>Your email app is opening</h3>
          <p>{toastText}</p>
          <button className="toast-close" onClick={() => setShowToast(false)}>
            Got it
          </button>
        </div>
      </div>
    </>
  );
}
