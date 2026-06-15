import { Navigate } from "react-router-dom";
import authService from "../services/authService";

function ProtectedRoute({ children }) {

  const isLoggedIn =
    authService.isLoggedIn();

  return isLoggedIn
    ? children
    : <Navigate to="/signup" />;
}

export default ProtectedRoute;