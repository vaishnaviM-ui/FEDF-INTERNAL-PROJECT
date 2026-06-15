import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CourseDetails from "./pages/CourseDetails";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Certificate from "./pages/Certificate";
import LearnCourse from "./pages/LearnCourse";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Quiz from "./pages/Quiz";
import Wishlist from "./pages/Wishlist";
import VerifyCertificate from "./pages/VerifyCertificate";
import AdminPanel from "./pages/AdminPanel";



function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/certificate/:id" element={<Certificate />} />
        <Route path="/learn/:id" element={<LearnCourse />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/quiz/:id" element={<Quiz />}/>
        <Route path="/verify" element={<VerifyCertificate />}/>
        <Route path="/admin"
  element={<AdminPanel />}
/>
      </Routes>

      <Footer />
      <BackToTop />

    </div>
  );
}
export default App;