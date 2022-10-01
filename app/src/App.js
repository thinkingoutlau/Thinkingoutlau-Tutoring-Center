import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Subjects from "./components/Subjects";
import Tutors from "./components/Tutors";
import Message from "./components/Message";
import MakeAppointment from "./components/MakeAppointment";

function App() {
  return (
    <>
      <div>
        <Home />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/appointment" element={<MakeAppointment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
