import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Reach out to us for
          support, inquiries, or feedback.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Form */}

        <div className="contact-form">

          <h2>Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="yourname@gmail.com"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button
            onClick={() =>
              alert("✅ Message Sent Successfully!")
            }
          >
            Send Message
          </button>

        </div>

        {/* Contact Information */}

        <div className="contact-info">

          <h2>Contact Information</h2>

          <p>
            📍 Prayagraj, Uttar Pradesh, India
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            📧 support@learnhub.com
          </p>

          <p>
            🕒 Mon - Sat : 9 AM - 6 PM
          </p>

          <div className="social-links">

            <a href="/">Facebook</a>

            <a href="/">Instagram</a>

            <a href="/">LinkedIn</a>

            <a href="/">YouTube</a>

          </div>

        </div>

      </div>

      {/* FAQ Section */}

      <div className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-card">
          <h3>How do I enroll in a course?</h3>
          <p>
            Simply select a course and click
            "Enroll Now".
          </p>
        </div>

        <div className="faq-card">
          <h3>Will I receive a certificate?</h3>
          <p>
            Yes, after successfully completing
            the course.
          </p>
        </div>

        <div className="faq-card">
          <h3>Can I access courses anytime?</h3>
          <p>
            Yes, enrolled students can access
            course content anytime.
          </p>
        </div>

        <iframe
  src="https://www.google.com/maps/embed?..."
  width="100%"
  height="300"
  style={{border:0}}
  loading="lazy"
></iframe>

      </div>

    </div>
  );
}

export default Contact;