import io from "socket.io-client";
import gotNewMessage from "./store/message";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("I am now connected to the server!");
});

socket.on("new-message", (message) => {
  store.dispatch(gotNewMessage(message));
});

export default socket;
