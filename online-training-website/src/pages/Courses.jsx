import { useState } from "react";
import { Link } from "react-router-dom";
import courses from "../data/courses";

function Courses() {

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const filteredCourses =
    courses.filter((course) => {

      const matchesSearch =
        course.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      if (category === "All")
        return matchesSearch;

      if (
        category === "Programming"
      ) {
        return (
          matchesSearch &&
          (
            course.title.includes("Java") ||
            course.title.includes("Python") ||
            course.title.includes("C++")
          )
        );
      }

      if (
        category === "Web"
      ) {
        return (
          matchesSearch &&
          (
            course.title.includes("React") ||
            course.title.includes("HTML") ||
            course.title.includes("Node")
          )
        );
      }

      if (
        category === "Data Science"
      ) {
        return (
          matchesSearch &&
          (
            course.title.includes("Data") ||
            course.title.includes("Machine")
          )
        );
      }

      if (category === "AI") {
        return (
          matchesSearch &&
          (
            course.title.includes("AI") ||
            course.title.includes("Deep")
          )
        );
      }

      return matchesSearch;
    });

  return (

    <div className="courses-page">

      <h1>
        Explore Courses
      </h1>

      <div className="search-container">

        <input
          type="text"
          placeholder="🔍 Search Courses..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >

          <option>
            All
          </option>

          <option>
            Programming
          </option>

          <option>
            Web
          </option>

          <option>
            Data Science
          </option>

          <option>
            AI
          </option>

        </select>

      </div>

      <div className="courses-grid">

        {filteredCourses.map(
          (course) => (

            <div
              key={course.id}
              className="course-card"
            >

              <img
                src={course.image}
                alt={course.title}
              />

              <div className="course-badges">

                <span>
                  📜 Certificate
                </span>

                <span>
                  🎯 Beginner
                </span>

              </div>

              <h3>
                {course.title}
              </h3>

              <p>
                👨‍🏫 {course.instructor}
              </p>


              <p>
                ⏱ {course.duration || "4 Weeks"}
              </p>

              <h4>
                {course.price}
              </h4>

              <Link
                to={`/course/${course.id}`}
              >
                <button>
                  View Details
                </button>
              </Link>

<button
  onClick={() => {

    let wishlist =
      JSON.parse(
        localStorage.getItem(
          "wishlist"
        )
      ) || [];

    if (
      wishlist.includes(course.id)
    ) {

      wishlist =
        wishlist.filter(
          (id) => id !== course.id
        );

      alert(
        "❌ Removed from Wishlist"
      );

    } else {

      wishlist.push(course.id);

      alert(
        "❤️ Added to Wishlist"
      );
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }}
>
  ❤️
</button>

            </div>

          )
        )}

      </div>

    </div>
  );
}

export default Courses;