function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}

        <div className="footer-section">

          <h2>LearnHub</h2>

          <p>
            LearnHub is an online learning platform
            offering industry-ready courses, practical
            projects, and certifications.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        {/* Popular Courses */}

        <div className="footer-section">

          <h3>Popular Courses</h3>

          <ul>
            <li>React JS</li>
            <li>Python Programming</li>
            <li>Data Science</li>
            <li>Full Stack Development</li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>📍 Prayagraj, Uttar Pradesh</p>
          <p>📧 support@learnhub.com</p>
          <p>📞 +91 98765 43210</p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 LearnHub Academy. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;