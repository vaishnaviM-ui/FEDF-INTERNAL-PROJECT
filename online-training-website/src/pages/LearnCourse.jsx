import { useState } from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import AIAssistant from "../components/AIAssistant";
function LearnCourse() {

  const { id } = useParams();

  const course = courses.find(
    (c) => c.id === Number(id)
  );

  const [completed, setCompleted] =
    useState(
      localStorage.getItem(
        `courseCompleted_${id}`
      ) === "true"
    );

  if (!course) {
    return (
      <h1 style={{ textAlign: "center" }}>
        Course Not Found
      </h1>
    );
  }

  const [studyCompleted, setStudyCompleted] =
  useState(
    localStorage.getItem(
      `studyCompleted_${id}`
    ) === "true"
  );

  const completeCourse = () => {

    localStorage.setItem(
      `courseCompleted_${id}`,
      "true"
    );

    setCompleted(true);

    alert(
      `🎉 Congratulations! You completed ${course.title}`
    );
  };

  const getCertificate = () => {

    if (
      localStorage.getItem(
        `courseCompleted_${id}`
      ) !== "true"
    ) {
      alert(
        "❌ Complete the course first"
      );
      return;
    }

    window.location.href =
      `/certificate/${id}`;
  };

  const [pdfOpened, setPdfOpened] =
  useState(false);

  return (
    <div className="learn-page">

      <h1>{course.title}</h1>

       <p>
    Complete the study material and unlock your
    certificate.
  </p>
  <br />  

<div className="video-section">

  <h2>🎥 Course Video</h2>

  <iframe
    width="100%"
    height="450"
    src={course.video}
    title={course.title}
    allowFullScreen
  ></iframe>

</div>

      <div className="pdf-section">

  <h2>📄 Study Material : </h2>
  <br />

  <div className="pdf-card">

    <h3>{course.title} Notes</h3>

    <button> <a
      href={course.pdf}
      target="_blank"
      rel="noreferrer"
       onClick={() => setPdfOpened(true)}
    >
      Open PDF Notes
    </a>
 </button>

  </div>

</div>



      <div className="progress-section">
    
        <h2>📊 Your Progress</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: pdfOpened
                ? "50%"
                : "0%",
            }}
          ></div>
        </div>

      </div>

      <div className="learn-buttons">

<button
  onClick={() => {

    const confirmRead =
      window.confirm(
        "Have you completed studying the notes and video?"
      );

    if (!confirmRead) return;

    localStorage.setItem(
      `studyCompleted_${id}`,
      "true"
    );

    setStudyCompleted(true);

    alert(
      "📚 Study Material Completed. Now take the Quiz."
    );

  }}
>
  {studyCompleted
    ? "✅ Study Completed"
    : "Mark Study Complete"}
</button>


{studyCompleted && (
  <button
    className="certificate-btn"
    onClick={() => {
      if (!id) return;

      window.location.href = `/quiz/${id}`;
    }}
  >
    📝 Take Quiz
  </button>
)}

      </div>

      <AIAssistant/>
    </div>
  );
}

export default LearnCourse;