import React from "react";
import { Link } from "react-router-dom";

const SERVICES_LIST = [
  {
    id: "marketing",
    number: "01 / DIGITAL MARKETING",
    title: "Digital Marketing",
    lead: "Reach the right audience and grow your online presence with a focused digital strategy.",
    description:
      "We help connect your goals to the right channels, campaign messaging and measurement—so your online activity has a clear purpose.",
    image: "/assets/service-digital-marketing.jpg",
    serviceParam: "Digital Marketing",
    deliverables: [
      "Digital channel planning",
      "Audience and campaign strategy",
      "Content and campaign coordination",
      "Performance reporting",
    ],
    imageFirst: true,
  },
  {
    id: "social",
    number: "02 / SOCIAL MEDIA MANAGEMENT",
    title: "Social Media Management",
    lead: "Build your brand presence with engaging content, strategic posting and audience management.",
    description:
      "Content planning, publishing, community engagement and account management for brands that need a consistent, considered presence and a clear content rhythm.",
    image: "/assets/service-social-media-management.jpg",
    serviceParam: "Social Media Management",
    deliverables: [
      "Channel audit & content direction",
      "Monthly editorial calendar",
      "Publishing & community support",
      "Performance review",
    ],
    imageFirst: false,
  },
  {
    id: "content",
    number: "03 / CONTENT CREATION",
    title: "Content Creation",
    lead: "Create compelling reels, promotional videos, graphics and digital content that attracts your audience.",
    description:
      "Reels, short-form videos, graphics, campaign assets and creative concepts for launches, social channels and ongoing campaigns.",
    image: "/assets/service-content-creation.jpg",
    serviceParam: "Content Creation",
    deliverables: [
      "Creative concepts & scripts",
      "Reels and short-form edits",
      "Social and campaign graphics",
      "Platform-specific asset exports",
    ],
    imageFirst: true,
  },
  {
    id: "performance",
    number: "04 / PERFORMANCE MARKETING",
    title: "Performance Marketing",
    lead: "Make campaigns measurable with audience targeting, testing and ongoing optimisation.",
    description:
      "Paid campaign planning and performance monitoring designed to help improve reach, enquiries and return on advertising spend. Campaign goals and reporting are agreed before launch.",
    image: "/assets/service-performance-marketing.jpg",
    serviceParam: "Performance Marketing",
    deliverables: [
      "Campaign setup and objectives",
      "Audience and creative testing",
      "Conversion and lead tracking",
      "Reporting and optimisation",
    ],
    imageFirst: false,
  },
];

const FAQS = [
  {
    q: "How long does a project take?",
    a: "It depends on the scope, assets and feedback cycles. After the initial brief, we'll suggest a realistic timeline before work begins.",
  },
  {
    q: "What deliverables will I receive?",
    a: "Deliverables are agreed in the project scope and may include a strategy document, content calendar, creative assets, edited video, campaign plan or performance summary.",
  },
  {
    q: "How will we collaborate?",
    a: "We align on a brief, milestones and feedback process at the start. You’ll know what is being created, when reviews happen and what is needed from you.",
  },
  {
    q: "How is pricing decided?",
    a: "Pricing depends on the services, volume of content, production needs, platforms and timeline. We’ll discuss your goals and budget before sharing a tailored proposal.",
  },
  {
    q: "How do we get started?",
    a: "Share your business, goals, preferred services and timing through the contact page or WhatsApp. We’ll review the brief and discuss the best next step.",
  },
];

export default function ServicesPage() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-fade-in">
      {/* Page Hero */}
      <section className="wrap page-hero">
        <p className="eyebrow services-eyebrow">OUR SERVICES</p>
        <h1>
          Creative services.<br />
          <span>Built for brand growth.</span>
        </h1>
        <p className="lead">
          From the first strategy session to the final campaign asset, we connect content, craft and
          digital execution. Choose focused support or build an end-to-end creative partnership.
        </p>
        <div className="page-hero-image">
          <img src="/assets/services-hero.jpg" alt="PCP Media creative studio" loading="lazy" />
        </div>
        <div className="pill-row">
          <a className="pill" href="#marketing" onClick={(e) => scrollToSection(e, "marketing")}>
            01 Digital Marketing
          </a>
          <a className="pill" href="#social" onClick={(e) => scrollToSection(e, "social")}>
            02 Social Media
          </a>
          <a className="pill" href="#content" onClick={(e) => scrollToSection(e, "content")}>
            03 Content Creation
          </a>
          <a className="pill" href="#performance" onClick={(e) => scrollToSection(e, "performance")}>
            04 Performance Marketing
          </a>
        </div>
      </section>

      {/* Service Detail Sections */}
      {SERVICES_LIST.map((srv) => (
        <section key={srv.id} className="service-detail" id={srv.id}>
          <div className="wrap split">
            {srv.imageFirst && (
              <img src={srv.image} alt={`${srv.title} — PCP Media`} loading="lazy" />
            )}

            <div>
              <p className="eyebrow">{srv.number}</p>
              <h2>{srv.title}</h2>
              <p className="lead">{srv.lead}</p>
              <p>{srv.description}</p>
              <Link
                className="btn"
                to={`/contact?service=${encodeURIComponent(srv.serviceParam)}`}
              >
                Discuss this service ↗
              </Link>
              <div className="deliverables">
                {srv.deliverables.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </div>

            {!srv.imageFirst && (
              <img src={srv.image} alt={`${srv.title} — PCP Media`} loading="lazy" />
            )}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">THE PRACTICAL DETAILS</p>
          <h2>Good questions. Clear answers.</h2>
          <div className="faq" style={{ marginTop: "28px" }}>
            {FAQS.map((faq, idx) => (
              <details key={idx}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="wrap">
        <div className="contact-band">
          <p className="eyebrow" style={{ color: "#171300" }}>
            LET'S WORK TOGETHER
          </p>
          <h2>Ready to build your brand's next chapter?</h2>
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