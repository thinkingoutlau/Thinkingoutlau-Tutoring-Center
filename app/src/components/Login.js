import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate, me } from "../store/auth";

// once user logs in, update the page to show the logout button so user can logout
// if user logs out, change the state of the page
// when user logs in, direct the user to their userpage; change the state of the page
// ****change state based on whether user is a student or a tutor****
function Login() {
  //initial state, user hasn't logged in yet; setForm is a function that changes the state
  //cannot reassign form, must use setForm to change state
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  //form gets passed in as an argument
  //on submit, making a post request to check user exist in the backend in db, which is set to userInDB
  const handleSubmit = async (form) => {
    try {
      dispatch(authenticate(form.username, form.password, "login"));
      // const { data: userInDB } = await axios.post("/api/login", form);
      // console.log("print from login, userInDB", userInDB);
      //window is a global object that has access to localStorage
      //localStorage allows us to persist data locally on the browser; setItem is a method on localStorage
      //that allows us to store info locally
      // window.localStorage.setItem("token", userInDB.token);
      // attemptTokenLogin();
      setForm({
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //local storage kept track of token(id of user)
  //login value exists

  //if login value is not an empty string, that means somehting exist
  // const logout = () => {
  //   window.localStorage.removeItem("token");
  //   state.setLogin("");
  // };

  useEffect(() => {
    dispatch(me());
  }, []);

  return auth.id ? (
    <div>Welcome </div>
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
