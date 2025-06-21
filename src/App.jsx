import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SentEmail from "./Components/SentEmail";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SentEmail />} />
        </Routes>

        {/* Toast container must be added here */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;
