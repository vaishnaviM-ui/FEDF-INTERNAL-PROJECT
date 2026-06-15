import courses from "../data/courses";

function Wishlist() {

  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  const wishlistCourses =
    courses.filter((course) =>
      wishlist.includes(course.id)
    );

  const removeFromWishlist = (id) => {

    const updatedWishlist =
      wishlist.filter(
        (courseId) => courseId !== id
      );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

    window.location.reload();
  };

  return (
  <div className="wishlist-page">

    <h1>❤️ My Wishlist</h1>

    {wishlistCourses.length > 0 ? (

      <div className="wishlist-grid">

        {wishlistCourses.map((course) => (

          <div
            key={course.id}
            className="wishlist-card"
          >

            <img
              src={course.image}
              alt={course.title}
            />

            <div className="wishlist-card-content">

              <h3>{course.title}</h3>

              <p>
                Instructor:
                {" "}
                {course.instructor}
              </p>

              <div className="wishlist-btns">

                <button
                  onClick={() =>
                    removeFromWishlist(
                      course.id
                    )
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    ) : (

      <h3
        style={{
          textAlign: "center",
          marginTop: "50px"
        }}
      >
        No courses in wishlist ❤️
      </h3>

    )}

  </div>
);
}

export default Wishlist;