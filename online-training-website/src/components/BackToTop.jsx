import { useEffect, useState } from "react";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }

    });

  }, []);

  return (

    show && (

      <button
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      >
        ↑
      </button>

    )

  );
}

export default BackToTop;