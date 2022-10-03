import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
// import { Segment } from "semantic-ui-react";

// id (string or number) - required for any step
// message (string or function) - a message to the user
// trigger (string, number, or function) - the id of the next step triggered
// delay (number) - the delay time before the message appears
// end (boolean) - if True, this step is the end of the conversation

function MakeAppointment() {
  const steps = [
    {
      id: "Greet",
      message: "Hello there! Welcome to Thinkingoutlau Learning Center!",
      trigger: "Help"
    },
    {
      id: "Help",
      message: "What is your name?",
      trigger: "waiting1"
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name"
    },
    {
      id: "Name",
      message: "Hi {previousValue}, how can I help you today?",
      trigger: "waiting2"
    },
    {
      id: "waiting2",
      user: true,
      trigger: "issues1"
    },
    {
      id: "issues1",
      message: "I hear ya. Let me help you out.",
      trigger: "issues2"
    },
    {
      id: "issues2",
      message: "Please select one of the following options:",
      trigger: "options1"
    },
    {
      id: "options1",
      options: [
        {
          value: "Speak to a tutor",
          label: "Speak to a tutor",
          trigger: "Speak to a tutor"
        },
        {
          value: "Upload homework question",
          label: "Upload homework question",
          trigger: "Upload homework question"
        }
      ]
    },
    {
      id: "Speak to a tutor",
      message:
        "Please click the Calendar tab on the side bar menu to schedule an appointment.",

      trigger: "question"
    },
    {
      id: "Upload homework question",
      message:
        "Please click the Homework Help tab on the side bar menu to upload your homework.",
      trigger: "question"
      // end: true
    },
    {
      id: "question",
      message: "Is there anything else I can help you with?",
      trigger: "waiting3"
    },
    {
      id: "waiting3",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "Yes"
        },
        {
          value: "No",
          label: "No",
          trigger: "No"
        }
      ]
    },
    {
      id: "Yes",
      message:
        "Please contact us at thinkingoutlau@gmail.com and we will get back to you shortly. Have a nice day!",
      end: true
    },
    {
      id: "No",
      message: "Great! Hope you have a great rest of your day!",
      end: true
    }
  ];

  const config = {
    width: "500px",
    height: "500px",
    floating: true,
    submitButtonStye: {
      submitButtonStye: "https://static.thenounproject.com/png/614366-200.png"
    },
    botDelay: 1000,
    botAvatar:
      "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/50437/woman-teacher-emoji-clipart-md.png",
    userAvatar:
      "https://as1.ftcdn.net/v2/jpg/02/15/08/80/1000_F_215088044_Ow0pypSekAamu3jZJnkRtfAyKj6KVlKj.jpg"
  };

  const theme = {
    background: "#eeebef",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#f499a8",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#f499a8",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a"
  };

  return (
    <>
      <div className="messageToClickChatBot">
        <img src="https://www.youcubed.org/wp-content/uploads/2017/03/beautiful-math-1.jpg" />
        <p>Please press the button on the bottom right to request for help!</p>
        <p>
          <br></br>
          <div className="contactGmail">
            <small>
              <small>
                <strong>Contact us:</strong> thinkingoutlau@gmail.com
              </small>
            </small>
          </div>
        </p>
      </div>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} {...config} />
      </ThemeProvider>
    </>
  );
}

export default MakeAppointment;
