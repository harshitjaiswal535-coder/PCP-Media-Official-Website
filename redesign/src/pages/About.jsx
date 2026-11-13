import React from "react";
import { Link } from "react-router-dom";

const REASONS = [
  {
    number: "01",
    title: "Strategy before execution",
    desc: "We start with your goals, audience and brand voice, then build a focused plan for the channels that matter.",
  },
  {
    number: "02",
    title: "Content with purpose",
    desc: "Photography, video and design work together to tell your story clearly and consistently.",
  },
  {
    number: "03",
    title: "A collaborative partnership",
    desc: "From the first brief to campaign reviews, we keep the process clear, practical and aligned with your business.",
  },
  {
    number: "04",
    title: "Measure, learn, improve",
    desc: "We look at meaningful indicators and use the learning to make future creative and campaign decisions stronger.",
  },
];

const PROCESS_STEPS = [
  { step: "01", name: "Discover", desc: "Understand your business, audience and goals." },
  { step: "02", name: "Strategise", desc: "Set a focused direction, channels and content plan." },
  { step: "03", name: "Create", desc: "Produce visuals, copy and campaigns that fit your brand." },
  { step: "04", name: "Launch", desc: "Publish your content and put the campaign into action." },
  { step: "05", name: "Optimise", desc: "Review performance and refine what comes next." },
];

export default function About() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="page-fade-in">
      {/* Symmetrically Centered Header */}
      <section className="page-hero wrap">
        <p className="eyebrow">ABOUT PCP MEDIA</p>
        <h1>
          Creative thinking.<br />
          <span>Strategic growth.</span>
        </h1>
        <p className="lead">
          We Help Businesses Grow Through Engaging Content, Creative Storytelling, and Smart Digital
          Marketing Strategies That Build Stronger Brands and Meaningful Connections.
        </p>
      </section>

      {/* Centered Agency Intro */}
      <section className="about-intro wrap">
        <p className="about-desc">
          PCP Media is a creative digital marketing agency with over 2 years of experience in content creation,
          social media management, product photography, and digital marketing. We have worked with brands and
          businesses across different industries, including <strong>Maharana Pratap Education Centre</strong>,{" "}
          <strong>Dularey Jewellers</strong>, <strong>SG Industries</strong>, and <strong>D'Orchid</strong>. From
          managing social media pages and creating engaging content to producing professional product shoots and
          promotional videos, we help brands build their online presence and connect with their audience.
        </p>
      </section>

      {/* Founder Point of View */}
      <section className="wrap about-pov">
        <h2>OUR POINT OF VIEW</h2>
        <p>
          We believe in building a strong digital bridge between brands and their audiences. Through engaging
          content and effective marketing strategies, we help businesses stay connected with their existing
          customers, strengthen relationships with their audience, and reach new potential customers. Our goal is
          to turn creative ideas into meaningful connections that help brands build trust and grow.
        </p>
        <p className="founder-name">
          <strong>Harshit</strong>
          <small>Founder</small>
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">WHY CHOOSE US</p>
              <h2>
                Creative thinking.<br />
                Clear direction.
              </h2>
            </div>
            <p>Our approach combines planning, thoughtful production and transparent collaboration.</p>
          </div>
          <div className="grid-2">
            {REASONS.map((item, idx) => (
              <article key={idx} className="card service-card" onMouseMove={handleMouseMove}>
                <div className="spotlight-overlay" />
                <div className="number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">OUR PROCESS</p>
          <h2>Discover. Create. Keep moving.</h2>
          <div className="process">
            {PROCESS_STEPS.map((p, idx) => (
              <div key={idx} className="step">
                <b>
                  {p.step} {p.name}
                </b>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="wrap">
        <div className="contact-band">
          <p className="eyebrow" style={{ color: "#171300" }}>
            LET'S BUILD SOMETHING
          </p>
          <h2>Your brand deserves a clear direction.</h2>
          <p>Tell us about your business, goals and what you want to create next.</p>
          <Link className="btn" to="/contact">
            <svg
              className="wa-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
              Let's talk
          </Link>
        </div>
      </section>
    </div>
  );
}