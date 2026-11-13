import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phone = "917839492298";
    const text = 
`*New Project Enquiry - PCP Media*
• Name: ${formData.name}
• Business: ${formData.business || "N/A"}
• Email: ${formData.email}
• Service: ${formData.service}
• Message: ${formData.message || "N/A"}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <section className="section mini-project-section" id="tell-us-about-your-project">
      <div className="wrap mini-project">
        <div className="mini-project-copy">
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Tell us about your project.</h2>
          <p>
            Share a few details about your brand and what you want to achieve. We’ll get back to you to discuss the next steps.
          </p>
          <div className="mini-contact-links">
            <a href="https://wa.me/917839492298" target="_blank" rel="noopener noreferrer">
              WhatsApp: +91 78394 92298 ↗
            </a>
            <a href="mailto:pcpmedia001@gmail.com">pcpmedia001@gmail.com</a>
          </div>
        </div>
        <form className="mini-project-form" onSubmit={handleWhatsAppSubmit}>
          <div className="form-grid">
            <label>
              Your name *
              <input
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </label>
            <label>
              Business name
              <input
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                placeholder="Business or brand"
              />
            </label>
            <label>
              Email address *
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
              />
            </label>
            <label>
              Service required
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="">Choose a service</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Content Creation">Content Creation</option>
                <option value="Performance Marketing">Performance Marketing</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
          </div>
          <label className="full-label">
            Tell us about your project
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your goals, timeline, or what you need help with..."
            />
          </label>
          <button className="btn" type="submit">
            Send on WhatsApp&nbsp; →
          </button>
          <p className="form-help" role="status" aria-live="polite">
            When you press send, WhatsApp opens with your enquiry already written. Just tap send there.
          </p>
        </form>
      </div>
    </section>
  );
}