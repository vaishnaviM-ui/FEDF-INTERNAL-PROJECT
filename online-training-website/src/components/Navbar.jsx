import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user"));

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");


  const handleLogout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    alert("Logged Out Successfully");

    navigate("/");

    window.location.reload();
  };

  return (
    <nav className="navbar">

      <h2 className="logo">
        LearnHub
      </h2>

      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/courses">
            Courses
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

       {
  !isLoggedIn ? (
    <li>
      <Link to="/signup">
        Sign Up
      </Link>
    </li>
  ) : (
    <li>
      <Link to="/profile">
        My Account
      </Link>
    </li>
  )
}

<Link to="/wishlist">
  Wishlist
</Link>
        <li>
          <button
            className="dark-btn"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>

      </ul>

      {isLoggedIn && (
        <Link
          to="/profile"
          className="profile-link"
        >
          <FaUserCircle size={34} />
        </Link>
      )}

    </nav>
  );
}

export default Navbar;