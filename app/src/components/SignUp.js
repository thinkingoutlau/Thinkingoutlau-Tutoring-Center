import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../store/user";
import { Link } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (form) => {
    dispatch(createNewUser(form));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }}
    >
      <label htmlFor="SignUp">
        <strong>Sign Up</strong>
      </label>

      <input
        onChange={(event) => setForm({ ...form, username: event.target.value })}
        value={form.username}
        name="username"
        type="text"
        placeholder="Enter username"
      />
      <input
        onChange={(event) => setForm({ ...form, password: event.target.value })}
        value={form.password}
        name="password"
        type="password"
        autoComplete="on"
        placeholder="Enter password"
      />
      <button>Submit</button>
      <div className="login">
        <p>
          {"Have an account already?"}
          <strong>
            <Link to="/login">Login here</Link>
          </strong>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
