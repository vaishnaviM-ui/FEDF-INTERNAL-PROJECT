import { useState } from "react";
import courses from "../data/courses";

function VerifyCertificate() {

  const [certificateId,
    setCertificateId] =
    useState("");

  const [result,
    setResult] =
    useState(null);

  const verifyCertificate = () => {

    let found = null;

    courses.forEach((course) => {

      const cert =
        JSON.parse(
          localStorage.getItem(
            `certificate_${course.id}`
          )
        );

      if (
        cert &&
        cert.certificateId ===
        certificateId
      ) {
        found = cert;
      }

    });

    setResult(found);

  };

  return (

    <div className="verify-page">

      <h1>
        Certificate Verification
      </h1>

      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certificateId}
        onChange={(e)=>
          setCertificateId(
            e.target.value
          )
        }
      />

      <button
        onClick={verifyCertificate}
      >
        Verify
      </button>

      {result && (

        <div className="verify-success">

          <h2>
            ✅ Valid Certificate
          </h2>

          <p>
            Student:
            {" "}
            {result.studentName}
          </p>

          <p>
            Course:
            {" "}
            {result.courseName}
          </p>

          <p>
            Date:
            {" "}
            {result.date}
          </p>

        </div>

      )}

      {!result &&
      certificateId &&
      (
        <div className="verify-fail">

          ❌ Certificate Not Found

        </div>
      )}

    </div>

  );

}

export default VerifyCertificate;