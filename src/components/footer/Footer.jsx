import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.avif";
import "./Footer.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.6 2.59 2.59 0 0 1 3.37-2.47V9.67a5.7 5.7 0 0 0-.78-.05 5.69 5.69 0 0 0-5.69 5.69A5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: send `email` to your newsletter service / backend
    setEmail("");
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <Link to="/" className="footer-logo">
            <img
              src={logo}
              alt="Bean & Bloom Coffee Co. Logo"
              className="footer-logo-img"
            />
            <div>
              <h3>Bean &amp; Bloom</h3>
              <h3>coffee co.</h3>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="footer-nav" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="footer-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="footer-social"
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-newsletter-title">Stay in Touch</h4>
            <form className="footer-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="footer-input"
                placeholder="Your email address"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="footer-submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Bean &amp; Bloom. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
