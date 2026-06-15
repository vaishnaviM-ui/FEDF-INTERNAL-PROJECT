import { Link } from "react-router-dom";
import courses from "../data/courses";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Categories from "../components/Categories";

function Home() {
  return (
    <div>

      <div className="offer-banner">
        🎉 New Students Get 30% OFF on Premium Courses
      </div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Learn Skills That Shape Your Future 🚀
          </h1>

         


          <div className="hero-buttons">

            <Link to="/courses">
              <button className="explore-btn">
                Explore Courses
              </button>
            </Link>

            <Link to="/about">
              <button className="about-btn">
                Learn More
              </button>
            </Link>

          </div>

          <div className="hero-trust">
            <span>⭐ 4.8 Rating</span>
            <span>🎓 10,000+ Students</span>
            <span>🏆 Industry Certificates</span>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats">

        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>95%</h2>
          <p>Success Rate</p>
        </div>

      </section>

      {/* WHY US */}

      <section style={{ backgroundColor: 'rgb(235, 158, 158)' }} className="why-home">

        <h2>Why Choose LearnHub?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>🎓 Expert Instructors</h3>
            <p>Learn from industry professionals.</p>
          </div>

          <div className="why-card">
            <h3>📜 Certificates</h3>
            <p>Get recognized certificates.</p>
          </div>

          <div className="why-card">
            <h3>💻 Real Projects</h3>
            <p>Build practical projects.</p>
          </div>

        </div>

      </section>

      {/* FEATURED */}

      <section className="featured-section">

        <h2>🔥 Featured Courses</h2>

        <p>
          Most popular courses chosen by students.
        </p>

        <div className="featured-grid">

          {courses.slice(0, 6).map((course) => (

            <div
              key={course.id}
              className="featured-card"
            >

              <img
                src={course.image}
                alt={course.title}
              />

              <h3>{course.title}</h3>

              <p>{course.instructor}</p>

              <div className="course-meta">
                <span>{course.price}</span>
                <span>⭐ 4.8</span>
              </div>

              <Link to={`/course/${course.id}`}>
                <button>
                  View Course
                </button>
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section  style={{ backgroundColor: '#24b85a' , padding: '40px 20px' }} className="cta-section">

        <h2 style={{ color: 'purple' ,textalign:'center' ,fontSize:'36px',fontWeight:'bold', justifyContent:'center', display:'flex' }}> 
          Start Learning Today
        </h2>

        <p style={{ color: 'black' ,textalign:'center' ,fontSize:'18px', justifyContent:'center', display:'flex' }}>
          Join thousands of learners building
          successful careers through LearnHub.
        </p>

        <Link style={{justifyContent:'center', display:'flex' }} to="/courses">
          <button  style={{ backgroundColor: 'purple' , color: 'white' , border: 'none' , padding: '12px 25px' , borderRadius: '8px' , cursor: 'pointer' ,textalign:'center' ,fontSize:'16px',fontWeight:'bold', justifyContent:'center', display:'flex' }} >
            Browse Courses
          </button>
        </Link>

      </section>

      <Categories />
      <Stats />
      <Testimonials />
      <FAQ />

    </div>
  );
}

export default Home;