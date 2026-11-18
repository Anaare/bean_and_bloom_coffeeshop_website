import "./About.css";
import interior__photo from "/images/cafe__interior.jpeg";

function About() {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-content">
          <p className="about-label">About Us</p>
          <h1 className="about-title">
            A Cozy Corner <br />
            in the Heart of Tbilisi
          </h1>
          <p className="about-text">
            Bean &amp; Bloom is a specialty coffee shop where great coffee meets
            a warm atmosphere. Whether you&rsquo;re here to work, catch up with
            friends, or simply enjoy a quiet moment &mdash; you&rsquo;re always
            welcome.
          </p>
        </div>

        <div className="about-image-wrapper">
          <img
            src={interior__photo}
            alt="Cozy interior of Bean & Bloom coffee shop with wooden tables and plants"
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
