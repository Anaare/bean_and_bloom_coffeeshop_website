import { Link } from "react-router-dom";
import "./Welcome__page.css";

export default function Welcome() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-top">Good Coffee.</span>
            <span className="hero-title-bottom">Better Mood.</span>
          </h1>

          <p className="hero-subtitle">
            SPECIALTY COFFEE • FRESH BAKES • COZY VIBES
          </p>

          <Link to="/menu" className="hero-btn">
            Explore Menu <span className="hero-btn-arrow">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
