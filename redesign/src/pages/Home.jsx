import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const SERVICES_DATA = [
  { icon: "↗", number: "01 / GROWTH", title: "Digital Marketing", desc: "From engaging content and social media to website development and digital campaigns, we help brands grow online." },
  { icon: "◎", number: "02 / COMMUNITY", title: "Social Media Management", desc: "Promote your brand through engaging content, creative posts, and smart social media strategies." },
  { icon: "▣", number: "03 / CONTENT", title: "Content Creation", desc: "Create eye-catching reels, photos, videos, and creatives that bring your brand to life." },
  { icon: "⌁", number: "04 / PERFORMANCE", title: "Performance Marketing", desc: "Run targeted ad campaigns that reach the right audience and bring better results within your budget." },
];

const PROJECTS_DATA = [
  { title: "Social Media And Branding", eyebrow: "SOCIAL MEDIA / CONCEPT", desc: "A café launch concept built around everyday rituals and a consistent social voice.", imgSrc: "/assets/work-social-media-branding.jpg", link: "https://drive.google.com/drive/folders/1PgIo0Sbd9NYFI5B95OCSsaX41gPCjhjS?usp=sharing" },
  { title: "Product Photography", eyebrow: "PHOTOGRAPHY / CONCEPT", desc: "A fragrance photography direction exploring light, detail and a clean visual story.", imgSrc: "/assets/work-product-photography.jpg", link: "https://drive.google.com/drive/folders/1Mt3p1YczFF2V9IEtQ_lmE-FyIL_rd6ah?usp=sharing" },
  { title: "Video Production and Campaigns", eyebrow: "VIDEO / CONCEPT", desc: "A short brand-film concept shaped by cinematic light and purposeful pacing.", imgSrc: "/assets/work-video-production-campaigns.jpg", link: "https://drive.google.com/drive/folders/1hYc-kWFJtNF84gOTNNuGvfHjUVr0Snje?usp=drive_link" },
];

const TESTIMONIALS_DATA = [
  { quote: "The team brings fresh ideas and a clear creative direction. The content makes our brand stand out.", author: "Anoop Verma", role: "Dularey Jewellers", avatar: "AV" },
  { quote: "Communication is smooth, the visuals are strong, and the work is delivered with care.", author: "Vikas Nigam", role: "Vaibhavi Enterprises", avatar: "VN" },
  { quote: "PCP Media understood what we wanted to communicate and turned it into clear, engaging creative content.", author: "Anjali Jaiswal", role: "SG Industries", avatar: "AJ" },
  { quote: "PCP Media made our library's online presence feel welcoming and professional. The posts and creatives connect well with our students and have brought in more enquiries.", author: "Avnish", role: "Unic Library", avatar: "A" },
];

export default function Home() {
  const trackRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div>
      <section className="hero hero-cinematic">
        <div className="hero-content">
          <p className="eyebrow">DIGITAL MARKETING AGENCY</p>
          <h1>WE CREATE<br />WE CONNECT<br /><span>WE GROW</span></h1>
          <p className="lead">PCP Media helps businesses grow online through engaging content creation, strategic social media management, professional photography, videography, and performance marketing.</p>
          <div className="hero-actions">
            <a className="btn" href="#selected-concepts">View Our Work&nbsp; →</a>
            <Link className="btn dark" to="/contact">Let's Talk</Link>
          </div>
          <p className="legal-note">Trusted by leading institutions &amp; brands</p>
          <div className="marquee-container">
            <div className="marquee-track">
              <div className="client-logo maharana"><img src="/assets/maharana-pratap-logo.png" alt="Maharana Pratap" /><span>Maharana Pratap<br /><small>Education Centre</small></span></div>
              <div className="client-logo wordmark dularey">DULAREY <b>JEWELLERS</b></div>
              <div className="client-logo wordmark vaibhavi">VAIBHAVI <b>ENTERPRISES</b></div>
              <div className="client-logo wordmark sg"><b>SG</b> INDUSTRIES</div>
              <div className="client-logo maharana"><img src="/assets/maharana-pratap-logo.png" alt="Maharana Pratap" /><span>Maharana Pratap<br /><small>Education Centre</small></span></div>
              <div className="client-logo wordmark dularey">DULAREY <b>JEWELLERS</b></div>
              <div className="client-logo wordmark vaibhavi">VAIBHAVI <b>ENTERPRISES</b></div>
              <div className="client-logo wordmark sg"><b>SG</b> INDUSTRIES</div>
            </div>
          </div>
        </div>
        <div className="hero-handwritten">Better Content.<br />Bigger Opportunities.</div>
      </section>

      <section className="section home-services" id="home-services">
        <div className="wrap">
          <div className="section-head services-heading">
            <div>
              <p className="eyebrow services-eyebrow">OUR SERVICES</p>
              <h2>Digital Solutions That Make Your Brand Grow</h2>
              <p className="services-intro">We offer end-to-end digital marketing and content creation solutions to help your brand get noticed and grow.</p>
            </div>
            <Link className="text-link" to="/services">View All Services&nbsp; →</Link>
          </div>
          <div className="grid-4 service-grid">
            {SERVICES_DATA.map((srv, idx) => (
              <article key={idx} className="card service-card" onMouseMove={handleMouseMove}>
                <div className="spotlight-overlay" />
                <div className="service-icon" aria-hidden="true">{srv.icon}</div>
                <div className="number">{srv.number}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="selected-concepts">
        <div className="wrap">
          <div className="section-head center-head">
            <div>
              <p className="eyebrow">OUR WORKS</p>
              <h2>Creative Ideas. Real Execution.</h2>
              <p className="center-intro">Explore our work across content creation, brand storytelling, creative campaigns, and digital marketing.</p>
            </div>
          </div>
          <div className="grid-3">
            {PROJECTS_DATA.map((proj, idx) => (
              <a key={idx} className="project" href={proj.link} target="_blank" rel="noopener noreferrer">
                <img src={proj.imgSrc} alt={proj.title} loading="lazy" />
                <p className="eyebrow">{proj.eyebrow}</p>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="client-feedback">
        <div className="wrap">
          <div className="section-head center-head">
            <div>
              <p className="eyebrow">WHAT CLIENTS SAY</p>
              <h2>Trust Built Through Creative Work.</h2>
            </div>
            <div className="testimonial-controls">
              <button className="scroll-control" type="button" onClick={() => scrollTestimonials("left")}>←</button>
              <button className="scroll-control" type="button" onClick={() => scrollTestimonials("right")}>→</button>
            </div>
          </div>
          <div className="testimonial-track" ref={trackRef} tabIndex={0}>
            {TESTIMONIALS_DATA.map((item, idx) => (
              <article key={idx} className="testimonial-card">
                <div className="quote-mark">“</div>
                <p>{item.quote}</p>
                <div className="testimonial-person">
                  <span className="avatar">{item.avatar}</span>
                  <div>
                    <strong>{item.author}</strong>
                    {item.role && <small>{item.role}</small>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}