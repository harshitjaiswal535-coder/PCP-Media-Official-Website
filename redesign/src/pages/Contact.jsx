import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  // Replaces the vanilla URLSearchParams script: auto-selects service passed in URL
  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setFormData((prev) => ({
        ...prev,
        service: serviceFromUrl,
      }));
    }
  }, [searchParams]);

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
• Service: ${formData.service || "Not specified"}
• Budget / Timeline: ${formData.budget || "N/A"}
• Project Details: ${formData.message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <div className="page-fade-in">
      {/* Page Hero */}
      <section className="wrap page-hero">
        <p className="eyebrow">CONTACT US</p>
        <h1>
          Let's talk about<br />
          <span>your brand.</span>
        </h1>
        <p className="lead">
          Whether you need a stronger social presence, fresh creative content or a performance
          marketing plan, start with a clear brief.
        </p>
      </section>

      {/* Contact Layout */}
      <section className="wrap contact-layout">
        <div className="contact-details">
          <a
            className="contact-item"
            href="https://wa.me/917839492298"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>WhatsApp</b>
            <p>+91 78394 92298</p>
            <span className="text-link">Start a conversation ↗</span>
          </a>

          <a className="contact-item" href="mailto:pcpmedia001@gmail.com">
            <b>Email</b>
            <p>pcpmedia001@gmail.com</p>
            <span className="text-link">Send an email ↗</span>
          </a>

          <div className="contact-item">
            <b>Tell us about your business</b>
            <p>Share your brand, website, audience and what you would like to achieve.</p>
          </div>

          <div className="contact-item">
            <b>Define the project</b>
            <p>Let us know which services you need, your preferred timeline and your budget range.</p>
          </div>

          <div className="contact-item">
            <b>What happens next?</b>
            <p>
              We review your goals and scope, then discuss the right creative and marketing approach
              for your business.
            </p>
          </div>
        </div>

        {/* Brief Form */}
        <form className="card form-card" onSubmit={handleWhatsAppSubmit}>
          <h2 style={{ fontSize: "30px" }}>Tell us about your project.</h2>
          <p className="muted">Fill in the brief and we will receive it on WhatsApp.</p>

          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="business">Business / brand</label>
          <input
            id="business"
            name="business"
            placeholder="Your business name"
            value={formData.business}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="service">Which service do you need?</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
          >
            <option value="">Choose a service</option>
            <option value="Social Media Management">Social Media Management</option>
            <option value="Photography and Videography">Photography and Videography</option>
            <option value="Content Creation">Content Creation</option>
            <option value="Digital Marketing and Analytics">Digital Marketing and Analytics</option>
            <option value="Branding and Creative Strategy">Branding and Creative Strategy</option>
            <option value="Multiple services / not sure yet">Multiple services / not sure yet</option>
          </select>

          <label htmlFor="budget">Budget or preferred timeline</label>
          <input
            id="budget"
            name="budget"
            placeholder="Optional"
            value={formData.budget}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Project details *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your goals, audience and what you want to create..."
            value={formData.message}
            onChange={handleInputChange}
          />

          <button className="btn" type="submit">
            Send on WhatsApp&nbsp; →
          </button>
          <p className="form-help" role="status" aria-live="polite">
            When you press send, WhatsApp opens with your enquiry already written. Just tap send there.
          </p>
        </form>
      </section>

      {/* Bottom CTA Band */}
      <section className="wrap">
        <div className="contact-band">
          <p className="eyebrow" style={{ color: "#171300" }}>
            LET'S WORK TOGETHER
          </p>
          <h2>Your next big idea starts here.</h2>
          <p>
            Tell us what you have in mind. Let's build a practical plan for your content, campaigns and
            digital presence.
          </p>
          <a
            className="btn"
            href="https://wa.me/917839492298"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp ↗
          </a>
        </div>
      </section>
    </div>
  );
}