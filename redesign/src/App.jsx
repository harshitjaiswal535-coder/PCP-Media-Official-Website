import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot"; // <-- Import Chatbot
import "./styles.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-wrapper">
        {/* Interactive Chatbot */}
        <Chatbot />

        {/* Global Navigation Header */}
        <header className="site-header">
          <div className="wrap nav">
            <NavLink className="brand" to="/" aria-label="PCP Media home">
              <img
                className="brand-logo"
                src="/assets/pcp-media-logo.png"
                alt="PCP Media — Pixel, Camera, Promotion"
              />
            </NavLink>

            <button
              className="menu-toggle"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            <nav
              className={`nav-links ${menuOpen ? "nav-open" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact us</NavLink>
            </nav>

            <a
              className="btn nav-cta"
              href="https://wa.me/917839492298"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let's talk
            </a>
          </div>
        </header>

        {/* Dynamic Route View */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="footer">
          <div className="wrap footer-row">
            <div className="brand">
              <img
                className="brand-logo"
                src="/assets/pcp-media-logo.png"
                alt="PCP Media — Pixel, Camera, Promotion"
              />
              <p>Creative thinking. Strategic growth.</p>
            </div>
            <div className="footer-links">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="footer-social" aria-label="Follow PCP Media on social media">
              <a href="https://www.instagram.com/pcp_media_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle className="social-dot" cx="17.5" cy="6.5" r="1" />
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/share/19qV2BXK3r/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h1.7V1.4C17 1.2 15.8 1 14.4 1 11.2 1 9 2.9 9 6.5V9H6v4h3v8z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
            <div className="footer-bottom">
  <p>© {new Date().getFullYear()} PCP Media. All rights reserved.</p>
  
  <a 
    href="https://prototype-f42.pages.dev/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="prototype-badge"
    title="Visit PROTOTYPE"
  >
    <span className="status-dot"></span>
    <span className="dev-label">Crafted by</span>
    <span className="dev-name">PROTOTYPE</span>
    <svg className="arrow-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  </a>
</div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}