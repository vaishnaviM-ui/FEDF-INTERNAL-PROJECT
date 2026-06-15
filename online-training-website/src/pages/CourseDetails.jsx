import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!course) {
    return <h1>Course Not Found</h1>;
  }

  const handleEnroll = () => {

    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!emailPattern.test(email)) {
      alert(
        "Enter valid Gmail like example@gmail.com"
      );
      return;
    }

    localStorage.setItem(
      "studentName",
      name
    );

    localStorage.setItem(
      "selectedCourseId",
      course.id
    );

    alert("🎉 Enrollment Successful");

    navigate("/payment");
  };

  const [review, setReview] =
  useState("");

const [rating, setRating] =
  useState(5);

const reviews =
  JSON.parse(
    localStorage.getItem(
      `reviews_${course.id}`
    )
  ) || [];

const addReview = () => {

  if (!review.trim()) {
    alert("Write a review");
    return;
  }

  const newReview = {
    student:
      localStorage.getItem(
        "studentName"
      ) || "Student",

    rating,

    review
  };

  reviews.push(newReview);

  localStorage.setItem(
    `reviews_${course.id}`,
    JSON.stringify(reviews)
  );

  setReview("");

  alert(
    "⭐ Review Submitted"
  );

  window.location.reload();
};
  return (
    <div className="details-page">

      <img
        src={course.image}
        alt={course.title}
        className="details-image"
      />

      <h1>{course.title}</h1>

      <p>{course.description}</p>

      <h3>
        Instructor: {course.instructor}
      </h3>

      <h3>
        Price: {course.price}
      </h3>

<div className="details-box">

  <h2>⭐ Student Reviews</h2>

  {reviews.length > 0 ? (

    reviews.map((r, index) => (

      <div
        key={index}
        className="review-card"
      >

        <h4>
          {r.student}
        </h4>

        <p>
          {"⭐".repeat(r.rating)}
        </p>

        <p>
          {r.review}
        </p>

      </div>

    ))

  ) : (

    <p>
      No reviews yet
    </p>

  )}

  <hr />

  <h3>Add Review</h3>

  <select
    value={rating}
    onChange={(e)=>
      setRating(
        Number(e.target.value)
      )
    }
  >

    <option value="5">
      ⭐⭐⭐⭐⭐
    </option>

    <option value="4">
      ⭐⭐⭐⭐
    </option>

    <option value="3">
      ⭐⭐⭐
    </option>

    <option value="2">
      ⭐⭐
    </option>

    <option value="1">
      ⭐
    </option>

  </select>

  <textarea
    placeholder="Write your review..."
    value={review}
    onChange={(e)=>
      setReview(e.target.value)
    }
  />

  <button
    onClick={addReview}
  >
    Submit Review
  </button>

</div>

      <div className="enroll-form">

        <h2>Enroll Now</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button onClick={handleEnroll}>
          Submit Enrollment
        </button>


      </div>

    </div>
  );
}

export default CourseDetails;