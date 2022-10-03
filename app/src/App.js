import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Subjects from "./components/Subjects";
import Tutors from "./components/Tutors";
import Message from "./components/Message";
import MakeAppointment from "./components/HelpChatBot";
import HomeworkHelp from "./components/HomeworkHelp";
import Calendar from "./components/Calendar";
import MathPuns from "./components/MathPuns";

function App({ state }) {
  return (
    <>
      <div id="main">
        <header>
          <Navbar state={state} />
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
        </header>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/homeworkHelp" element={<HomeworkHelp />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/help" element={<MakeAppointment />} />
            <Route path="/mathPuns" element={<MathPuns />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
