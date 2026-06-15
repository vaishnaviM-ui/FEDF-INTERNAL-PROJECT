import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Choose a course and click the Enroll Now button."
    },

    {
      question:
        "Will I receive a certificate?",
      answer:
        "Yes, certificates are awarded after successful completion."
    },

    {
      question:
        "Can I access courses anytime?",
      answer:
        "Yes, you can access your enrolled courses anytime."
    },

    {
      question:
        "Do you provide placement support?",
      answer:
        "We provide career guidance and project-based learning."
    }
  ];

  return (
    <div className="faq-container">

      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="faq-item"
        >

          <div
            className="faq-question"
            onClick={() =>
              setOpen(
                open === index
                  ? null
                  : index
              )
            }
          >

            <h3>
              {faq.question}
            </h3>

            <span>
              {open === index
                ? "−"
                : "+"}
            </span>

          </div>

          {open === index && (

            <div className="faq-answer">

              <p>
                {faq.answer}
              </p>

            </div>

          )}

        </div>

      ))}

    </div>
  );
}

export default FAQ;