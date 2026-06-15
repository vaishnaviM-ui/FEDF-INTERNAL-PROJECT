import "./About.css";
function About() {
  return (
    <div  className="about-page">

      <section className="about-hero">

        <h1 >About LearnHub</h1>

        <p>
          LearnHub is an online learning platform designed to
          help students and professionals gain industry-ready
          skills through expert-led courses, practical projects,
          and certifications.
        </p>

      </section>

      <section className="stats-section">

  <div className="stat-box">
    <h2>10,000+</h2>
    <p>Students</p>
  </div>

  <div className="stat-box">
    <h2>50+</h2>
    <p>Courses</p>
  </div>

  <div className="stat-box">
    <h2>100+</h2>
    <p>Projects</p>
  </div>

  <div className="stat-box">
    <h2>95%</h2>
    <p>Success Rate</p>
  </div>

</section>

      <section className="about-section">

        <div className="about-card">

          <h2>🎯 Our Mission</h2>

          <p>
            Our mission is to make quality education accessible
            to everyone. We aim to bridge the gap between
            academic learning and industry requirements through
            modern online courses.
          </p>

        </div>

        <div className="about-card">

          <h2>👨‍🎓 Students Enrolled</h2>

          <h3>10,000+</h3>

          <p>
            Students from different backgrounds are actively
            learning and upgrading their skills on LearnHub.
          </p>

        </div>

        <div className="about-card">

          <h2>📚 Courses Available</h2>

          <h3>50+</h3>

          <p>
            Explore programming, web development, AI, cloud
            computing, cybersecurity, data science and more.
          </p>

        </div>

      </section>

      <section className="team-section">

        <h2>Meet Our Team</h2>

        <div className="team-container">

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="CEO"
            />
            <h3>John Smith</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Manager"
            />
            <h3>Sarah Johnson</h3>
            <p>Academic Director</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Trainer"
            />
            <h3>David Wilson</h3>
            <p>Lead Instructor</p>
          </div>

        </div>

      </section>

      <section className="testimonial-section">

  <h2>What Our Students Say</h2>

  <div className="testimonial-container">

    <div className="testimonial-card">
      <p>
        "The React course helped me build real-world projects
        and land my first internship."
      </p>
      <h4>- Priya Sharma</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "Excellent instructors and easy-to-understand lessons.
        Highly recommended!"
      </p>
      <h4>- Rahul Verma</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "The certification and projects improved my resume
        significantly."
      </p>
      <h4>- Anjali Singh</h4>
    </div>

  </div>

</section>

      <section className="why-us">

        <h2>Why Choose LearnHub?</h2>

        <ul>
          <li>✔ Industry-Relevant Curriculum</li>
          <li>✔ Expert Instructors</li>
          <li>✔ Practical Projects</li>
          <li>✔ Flexible Learning Schedule</li>
          <li>✔ Certificates of Completion</li>
          <li>✔ Career Support & Guidance</li>
        </ul>

      </section>

    </div>
  );
}

export default About;