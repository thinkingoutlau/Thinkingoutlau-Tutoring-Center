import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMessage } from "../store/message";

const NewMessageEntry = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState({
    message: "",
  });

  const handleSubmit = (message) => {
    dispatch(postMessage(message));
    console.log(message);
  };

  return (
    <div>
      <li className="media">
        <div className="media-left">
          {/* <a href="#"> */}
          {/* <img className="media-object" src={"winnie"} alt="image" /> */}
          {/* </a> */}
        </div>
        <div className="media-body">
          <h4 className="media-heading">Winnie</h4>
        </div>
      </li>
      <form
        id="new-message-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(message);
        }}
      >
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            onChange={(event) =>
              setMessage({ ...message, message: event.target.value })
            }
            value={message.message}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Chat!
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default NewMessageEntry;
