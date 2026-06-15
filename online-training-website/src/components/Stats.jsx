import { useEffect, useState } from "react";

function Stats() {

  const [students, setStudents] = useState(0);
  const [courses, setCourses] = useState(0);
  const [projects, setProjects] = useState(0);
  const [success, setSuccess] = useState(0);

  useEffect(() => {

    let s = 0;
    let c = 0;
    let p = 0;
    let sr = 0;

    const interval = setInterval(() => {

      if (s < 10000) {
        s += 250;
        setStudents(s);
      }

      if (c < 50) {
        c += 1;
        setCourses(c);
      }

      if (p < 100) {
        p += 2;
        setProjects(p);
      }

      if (sr < 95) {
        sr += 1;
        setSuccess(sr);
      }

    }, 30);

    return () => clearInterval(interval);

  }, []);

  return (

    <section style={{backgroundColor: 'rgb(235, 158, 158)'}} className="stats">

      <div className="stat-card">
        <h2>{students}+</h2>
        <p>Students</p>
      </div>

      <div className="stat-card">
        <h2>{courses}+</h2>
        <p>Courses</p>
      </div>

      <div className="stat-card">
        <h2>{projects}+</h2>
        <p>Projects</p>
      </div>

      <div className="stat-card">
        <h2>{success}%</h2>
        <p>Success Rate</p>
      </div>

    </section>
  );
}

export default Stats;