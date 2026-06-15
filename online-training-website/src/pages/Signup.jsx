import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";

function Signup() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    mobile: "",
    profession: "",
    nationality: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in user) {
      if (!user[key]) {
        alert("Please fill all fields");
        return;
      }
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const saveUser = {
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      mobile: user.mobile,
      profession: user.profession,
      nationality: user.nationality,
      password: user.password,
      photo:
        "https://tse1.mm.bing.net/th/id/OIP.pcS3BLIJqCEfg9tpyR7TXgHaEf?pid=Api&P=0&h=180"
    };

     authService.saveUser(
  saveUser
);
    login(saveUser);

alert("🎉 Account Created Successfully");

navigate("/profile");

  };

 

  return (
    <div className="signup-container">

      <form
        className="signup-form"
        onSubmit={handleSubmit}
      >

        <h2>Create Account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <input
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleChange}
        />

        <select
          name="nationality"
          onChange={handleChange}
        >
          <option value="">
            Select Nationality
          </option>

          <option>Indian</option>
          <option>American</option>
          <option>Canadian</option>
          <option>Australian</option>
          <option>Japanese</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <button type="submit">
          Create Account
        </button>

      </form>

    </div>
  );
};
export default Signup;