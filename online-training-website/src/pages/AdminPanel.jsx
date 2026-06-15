import courses from "../data/courses";

function AdminPanel() {

  const totalCourses =
    courses.length;

  let totalCompleted = 0;
  let totalCertificates = 0;

  courses.forEach((course) => {

    if (
      localStorage.getItem(
        `courseCompleted_${course.id}`
      ) === "true"
    ) {
      totalCompleted++;
    }

    if (
      localStorage.getItem(
        `quizPassed_${course.id}`
      ) === "true"
    ) {
      totalCertificates++;
    }

  });

  const wishlist =
    JSON.parse(
      localStorage.getItem(
        "wishlist"
      )
    ) || [];

  return (

    <div className="admin-page">

      <h1>
        Admin Dashboard
      </h1>

      <div className="admin-grid">

        <div className="admin-card">
          <h2>{totalCourses}</h2>
          <p>Total Courses</p>
        </div>

        <div className="admin-card">
          <h2>{totalCompleted}</h2>
          <p>Completed Courses</p>
        </div>

        <div className="admin-card">
          <h2>{totalCertificates}</h2>
          <p>Certificates Issued</p>
        </div>

        <div className="admin-card">
          <h2>{wishlist.length}</h2>
          <p>Wishlist Items</p>
        </div>

      </div>

    </div>

  );

}

export default AdminPanel;