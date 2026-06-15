import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/quizData";

function Quiz() {

  const { id } = useParams();
  const navigate = useNavigate();

  const questions = quizData[id] || [];

  const [answers, setAnswers] = useState({});

  const submitQuiz = () => {

    let score = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });

    const percentage =
      (score / questions.length) * 100;

    localStorage.setItem(
      `quizScore_${id}`,
      percentage
    );

    if (percentage >= 70) {

      localStorage.setItem(
        `quizPassed_${id}`,
        "true"
      );

      localStorage.setItem(
        `courseCompleted_${id}`,
        "true"
      );

      navigate(`/certificate/${id}`);

    } else {

      alert(
        `❌ Failed (${percentage}%). Need 70%`
      );

    }
  };

  return (
    <div className="quiz-page">

      <h1>Course Quiz</h1>

      {questions.map((q, index) => (

        <div
          key={index}
          className="quiz-card"
        >
          <h3>
            {index + 1}. {q.question}
          </h3>

          {q.options.map((option) => (

            <label
              key={option}
              style={{ display: "block" }}
            >
              <input
                type="radio"
                name={index}
                value={option}
                onChange={(e) =>
                  setAnswers({
                    ...answers,
                    [index]: e.target.value
                  })
                }
              />

              {option}

            </label>

          ))}
        </div>

      ))}

      <button onClick={submitQuiz}>
        Submit Quiz
      </button>

    </div>
  );
}

export default Quiz;