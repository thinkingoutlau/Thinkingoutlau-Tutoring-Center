import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Subjects from "./components/Subjects";
import Tutors from "./components/Tutors";
import Message from "./components/Message";

function App() {
  return (
    <>
      <div id="main">
        <header>
          <h3>
            <p>THINKINGOUTLAU TUTORING CENTER 🧮</p>
          </h3>
          <div className="quote">
            <p>
              "Teaching is more than imparting knowledge; it is inspiring
              change. Learning is more than absorbing facts; it is acquiring
              understanding.
            </p>
          </div>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
