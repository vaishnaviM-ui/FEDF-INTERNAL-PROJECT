import { Link } from "react-router-dom";
import courses from "../data/courses";
import { useCourse } from "../context/CourseContext";

function Dashboard() {
  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const user = storedUser || {};

  const { selectedCourseId } = useCourse();

  const isLoggedIn = !!storedUser;

  const enrolledCourse = courses.find(
    (c) => c.id === Number(selectedCourseId)
  );

  const enrolledCourses =
    selectedCourseId ? 1 : 0;

  let completedCourses = 0;

  courses.forEach((course) => {
    if (
      localStorage.getItem(
        `courseCompleted_${course.id}`
      ) === "true"
    ) {
      completedCourses++;
    }
  });

  let certificates = 0;

  courses.forEach((course) => {
    if (
      localStorage.getItem(
        `quizPassed_${course.id}`
      ) === "true"
    ) {
      certificates++;
    }
  });

  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  let progress = 0;

  if (
    localStorage.getItem(
      `pdfOpened_${selectedCourseId}`
    ) === "true"
  ) {
    progress += 30;
  }

  if (
    localStorage.getItem(
      `videoWatched_${selectedCourseId}`
    ) === "true"
  ) {
    progress += 30;
  }

  if (
    localStorage.getItem(
      `quizPassed_${selectedCourseId}`
    ) === "true"
  ) {
    progress += 40;
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>
          Welcome Back{" "}
          {isLoggedIn
            ? user.fullName || "Student"
            : "Guest"} 👋
        </h1>

        <p>
          Continue your learning journey
        </p>
      </div>

      {/* Statistics */}

      <div className="dashboard-stats">

        <div className="dashboard-card">
          <h2>{enrolledCourses}</h2>
          <p>Courses Enrolled</p>
        </div>

        <div className="dashboard-card">
          <h2>{completedCourses}</h2>
          <p>Courses Completed</p>
        </div>

        <div className="dashboard-card">
          <h2>{certificates}</h2>
          <p>Certificates Earned</p>
        </div>

        <div className="dashboard-card">
          <h2>{wishlist.length}</h2>
          <p>Wishlist Courses</p>
        </div>

        <div className="dashboard-card">
          <h2>
            {
              localStorage.getItem(
                `quizScore_${selectedCourseId}`
              ) || 0
            }%
          </h2>
          <p>Best Quiz Score</p>
        </div>

        <div className="dashboard-card">
          <h2>{progress}%</h2>
          <p>Overall Progress</p>
        </div>

      </div>

      {/* Latest Achievement */}

      <div className="recent-course">

        <h2>🏆 Latest Achievement</h2>

        {localStorage.getItem(
          `quizPassed_${selectedCourseId}`
        ) === "true" ? (

          <p>
            Congratulations! You earned a
            certificate in{" "}
            <strong>
              {enrolledCourse?.title}
            </strong>
          </p>

        ) : (

          <p>
            Complete your course and pass
            the quiz to earn a certificate.
          </p>

        )}

      </div>

      {/* Continue Learning */}

      <div className="recent-course">

        <h2>Continue Learning</h2>

        {enrolledCourse ? (

          <div className="recent-card">

            <img
              src={enrolledCourse.image}
              alt={enrolledCourse.title}
              className="dashboard-course-image"
            />

            <h3>
              {enrolledCourse.title}
            </h3>

            <p>
              Instructor:{" "}
              {enrolledCourse.instructor}
            </p>

            <p>
              Progress: {progress}%
            </p>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              ></div>

            </div>

            <Link
              to={`/learn/${enrolledCourse.id}`}
            >
              <button>
                Resume Course
              </button>
            </Link>

          </div>

        ) : (

          <div className="recent-card">

            <h3>
              No courses enrolled yet
            </h3>

            <Link to="/courses">
              <button>
                Browse Courses
              </button>
            </Link>

<Link to="/verify">
  <button>
    Verify Certificate
  </button>
</Link>

<Link to="/admin">
  <button>
    Admin Panel
  </button>
</Link>

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;