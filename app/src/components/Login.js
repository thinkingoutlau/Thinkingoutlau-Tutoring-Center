import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (form) => {
    try {
      const req = await axios.post("/api/login", form);
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(form);
      }}
    >
      <label htmlFor="Login">
        <strong>Login</strong>
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
      <div className="makeAccount">
        <p>
          {"Don't have an account?"}
          <strong>
            <Link to="/signup">Sign up here</Link>
          </strong>
        </p>
      </div>
    </form>
  );
}

export default Login;
