import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Profile() {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

   if (!user) {
    navigate("/signup");
    return null;
  }

  const handleLogout = () => {
  localStorage.clear();
  navigate("/login");
};


  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src={user.photo}
          alt="profile"
          className="profile-img"
        />

        <h1>{user.fullName}</h1>

        <p>@{user.username}</p>

      </div>

      <div className="profile-details">

        <h2>Account Information</h2>

        <div className="detail">
          <span>Email</span>
          <p>{user.email}</p>
        </div>

        <div className="detail">
          <span>Mobile</span>
          <p>{user.mobile}</p>
        </div>

        <div className="detail">
          <span>Profession</span>
          <p>{user.profession}</p>
        </div>

        <div className="detail">
          <span>Nationality</span>
          <p>{user.nationality}</p>
        </div>

        <button
  className="profile-logout"
  onClick={() => {handleLogout() 
  }}
>
  Logout
</button>

      </div>

    </div>
  );
}

export default Profile;