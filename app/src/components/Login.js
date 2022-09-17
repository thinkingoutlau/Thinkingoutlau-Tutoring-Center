import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// once user logs in, update the page to show the logout button so user can logout
// if user logs out, change the state of the page
// when user logs in, direct the user to their userpage; change the state of the page
// ****change state based on whether user is a student or a tutor****
function Login({ state }) {
  //initial state, user hasn't logged in yet; setForm is a function that changes the state
  //cannot reassign form, must use setForm to change state
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  //form gets passed in as an argument
  //on submit, making a post request to check user exist in the backend in db, which is set to userInDB
  const handleSubmit = async (form) => {
    try {
      const { data: userInDB } = await axios.post("/api/login", form);
      console.log(userInDB);
      //window is a global object that has access to localStorage
      //localStorage allows us to persist data locally on the browser; setItem is a method on localStorage
      //that allows us to store info locally
      window.localStorage.setItem("token", userInDB.token);
      attemptTokenLogin();
      setForm({
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const attemptTokenLogin = async () => {
    try {
      //check if user token exist, which we are getting from local storage,
      //if user does not exist, throw error. it user exists, setting auth token to header
      //which is an object from axios request
      const token = window.localStorage.getItem("token");
      console.log("show token", token);
      if (!token) {
        throw token;
      }
      const req = await axios.get("/api/login", {
        headers: { authorization: token },
      });
      //line 52 is calling the function setLogin which changes the login state showing user has
      //already logged in, with the req.data info, which allows us to render whatever we want
      //based on that value
      state.setLogin(req.data);
    } catch (error) {
      console.log("cannot find token", error);
    }
  };

  //local storage kept track of token(id of user)
  //login value exists

  //if login value is not an empty string, that means somehting exist
  // const logout = () => {
  //   window.localStorage.removeItem("token");
  //   state.setLogin("");
  // };

  return state.login ? (
    <div>Welcome</div>
  ) : (
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
