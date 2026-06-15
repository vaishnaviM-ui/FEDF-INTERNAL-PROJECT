import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import {
  CourseProvider
} from "./context/CourseContext";
import App from "./App";
import "./index.css";

import { AuthProvider }
from "./context/AuthContext";

ReactDOM.createRoot(
 document.getElementById("root")
).render(

  <React.StrictMode>

    <HashRouter>

      <AuthProvider>

        <CourseProvider>

          <App />

        </CourseProvider>

      </AuthProvider>

    </HashRouter>

  </React.StrictMode>
);