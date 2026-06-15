import { useEffect, useState } from "react";

function Testimonials() {

  const testimonials = [

    {
      name: "Priya Sharma",
      text:
        "The React course helped me secure my first internship. The lessons were clear and practical."
    },

    {
      name: "Rahul Verma",
      text:
        "One of the best online learning platforms. I completed Python Programming and built real projects."
    },

    {
      name: "Anjali Singh",
      text:
        "The certificates and projects helped strengthen my resume and improve my confidence."
    },

    {
      name: "Vikram Patel",
      text:
        "The support from instructors and community was amazing. I felt motivated throughout my learning journey."
    },

    {
      name: "Sneha Gupta",
      text:
        "I loved the variety of courses offered. I took Data Science and it was a game-changer for my career."
      
    },
    {
      name: "Arjun Mehta",
      text:
        "The platform's interactive lessons and real-world projects made learning enjoyable and effective."
    },
    {
      name: "Neha Reddy",
      text:
        "I highly recommend this platform to anyone looking to upskill. The courses are well-structured and the instructors are knowledgeable."
    }

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent(
        (prev) =>
          (prev + 1) %
          testimonials.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="testimonial-slider">

      <h2>
        ⭐ What Our Students Say
      </h2>

      <div style={{ backgroundColor: 'rgb(235, 158, 158)' }} className="testimonial-box">

        <h3>⭐⭐⭐⭐</h3>

        <p>
          "{testimonials[current].text}"
        </p>

        <h4>
          - {testimonials[current].name}
        </h4>

      </div>

    </section>
  );
}

export default Testimonials;