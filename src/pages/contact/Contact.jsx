import "./Contact.css";
import contact__photo from "/images/contact__page__photo.jpg";

const ADDRESS = "12 Freedom Square, Tbilisi, Georgia";
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function Contact() {
  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-content">
          <p className="contact-label">Hours &amp; Location</p>

          <ul className="contact-list">
            <li className="contact-item">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <p>
                Mon &ndash; Sun
                <br />
                8:00 AM &ndash; 10:00 PM
              </p>
            </li>

            <li className="contact-item">
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              <p>
                12 Freedom Square,
                <br />
                Tbilisi, Georgia
              </p>
            </li>
          </ul>

          <a
            href={directionsUrl}
            className="contact-btn"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <span className="contact-btn-arrow">›</span>
          </a>
        </div>

        <div className="contact-image-wrapper">
          <img
            src={contact__photo}
            alt="Cup of coffee on a table next to a vase of dried flowers"
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
