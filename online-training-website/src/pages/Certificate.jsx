import "./Certificate.css";
import { jsPDF } from "jspdf";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import instructorSign from "../assets/instructor.jpg";
import directorSign from "../assets/director.jpg";

function Certificate() {

  const { id } = useParams();

  const course =
    courses.find((c) => c.id == id);

  const today =
    new Date().toLocaleDateString();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const studentName =
    user.fullName || "Student";

  const downloadCertificate = () => {

      localStorage.setItem(
        `courseCompleted_${id}`,
        "true"
        
      );

  const certificateId =
  `LH-${id}-${Date.now()}`;

  localStorage.setItem(
  `certificate_${id}`,
  JSON.stringify({
    certificateId,
    studentName,
    courseName: course.title,
    date: today
  })
);
   
    const quizPassed =
  localStorage.getItem(
    `quizPassed_${id}`
  );

if (quizPassed !== "true") {

  return(
    <h1> ❌ Pass Quiz first to Unlock Certificate</h1>
  );
}

    const doc = new jsPDF("landscape");

    doc.setFontSize(28);

    doc.text(
      "Certificate of Completion",
      148,
      40,
      { align: "center" }
    );

    doc.setFontSize(18);

    doc.text(
      "This certificate is proudly awarded to",
      148,
      70,
      { align: "center" }
    );

    doc.setFontSize(24);

    doc.text(
      studentName,
      148,
      95,
      { align: "center" }
    );

    doc.setFontSize(18);

    doc.text(
      "for successfully completing",
      148,
      120,
      { align: "center" }
    );

    doc.text(
      course.title,
      148,
      140,
      { align: "center" }
    );

    doc.text(
      today,
      148,
      170,
      { align: "center" }
    );

    doc.save(
      `${course.title}-Certificate.pdf`
    );
  };

  return (
    <div className="certificate-container">

      <div className="certificate">

        <div className="certificate-border">

          <h4 className="certificate-org">
            LearnHub Academy
          </h4>

          <div className="certificate-badge">
            🏆 Achievement Award
          </div>

          <h1 className="certificate-title">
            Certificate of Completion
          </h1>

          <p className="certificate-text">
            This certificate is proudly presented to
          </p>

          <h2 className="student-name">
            {studentName}
          </h2>

          <p className="certificate-text">
            for successfully completing the online course
          </p>

          <h3 className="course-name">
            {course?.title}
          </h3>

          <p className="certificate-id">
  Certificate ID:
  {" "}
  {
    JSON.parse(
      localStorage.getItem(
        `certificate_${id}`
      )
    )?.certificateId
  }
</p>

          <p className="certificate-date">
            Date: {today}
          </p>

          <div className="certificate-footer">
  <div className="signature-box">
    <img style={{width:"150px",height:"50px"}}
      src={instructorSign}
      alt="Instructor Signature"
      className="signature-img"
    />
    <p>Instructor Signature</p>
  </div>
  
  <div className="signature-box">
    <img style={{width:"150px",height:"50px"}}
      src={directorSign}
      alt="Director Signature"
      className="signature-img"
    />
    <p>Director Signature</p>
  </div>

</div>
          

          <button
            className="download-btn"
            onClick={downloadCertificate}
          >
            Download Certificate
          </button>

        </div>

      </div>

    </div>
  );
}

export default Certificate;