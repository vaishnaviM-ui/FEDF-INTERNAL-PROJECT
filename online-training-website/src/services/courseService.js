
const courseService = {

  enroll(id) {

    localStorage.setItem(
      "selectedCourseId",
      id
    );
  },

  getEnrolledCourse() {

    return localStorage.getItem(
      "selectedCourseId"
    );
  },

  completeCourse(id) {

    localStorage.setItem(
      `courseCompleted_${id}`,
      "true"
    );
  },

  isCompleted(id) {

    return (
      localStorage.getItem(
        `courseCompleted_${id}`
      ) === "true"
    );
  }
};

export default courseService;