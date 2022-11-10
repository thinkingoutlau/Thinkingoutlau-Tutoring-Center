import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMessage } from "../store/message";
import { Link } from "react-router-dom";

const NewMessageEntry = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    message: ""
  });

  const handleSubmit = message => {
    dispatch(postMessage(message));
    console.log(message);
  };

  return (
    <div className="messengerBox">
      <div align="center">
        <img className="askForHelp" src="/AskForHelp.jpeg" />
      </div>
      <h3 className="media-heading">Happy chatting!</h3>
      {localStorage.length !== 0 ? (
        <div>
          <hr></hr>

          <form
            id="new-message-form"
            onSubmit={event => {
              event.preventDefault();
              handleSubmit(message);
            }}
          >
            <div className="input-group input-group-lg">
              <input
                className="form-control"
                type="text"
                name="content"
                onChange={event =>
                  setMessage({ ...message, message: event.target.value })
                }
                value={message.message}
                placeholder="Say hi to your tutor!"
              />
              <span className="input-group-btn">
                <p>
                  <button className="btn btn-default" type="submit">
                    Chat!
                  </button>
                </p>
              </span>
            </div>
          </form>
        </div>
      ) : (
        <div className="chatboxMessage">
          <strong>
            Please log in to message our tutors or create an appointment here:
          </strong>
          <Link to="/calendar">schedule</Link>
        </div>
      )}
    </div>
  );
};

export default NewMessageEntry;
