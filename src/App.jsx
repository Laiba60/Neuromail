import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SentEmail from "./Components/SentEmail";

const App = () => {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<SentEmail />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
