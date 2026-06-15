import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button>
          Back To Home
        </button>
      </Link>

    </div>
  );
}

export default NotFound;