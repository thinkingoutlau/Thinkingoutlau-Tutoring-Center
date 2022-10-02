import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    // icon: <AiIcons.AiFillHome />,
    className: "nav-text"
  },
  {
    title: "Login",
    path: "/login",
    // icon: <IoIcons.IoIosPaper />,
    className: "nav-text"
  },
  {
    title: "Subjects",
    path: "/subjects",
    // icon: <FaIcons.FaCartPlus />,
    className: "nav-text"
  },
  {
    title: "Tutors",
    path: "/tutors",
    // icon: <IoIcons.IoMdPeople />,
    className: "nav-text"
  },
  {
    title: "Message",
    path: "/messages",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text"
  },
  {
    title: "Homework Help",
    path: "/homeworkHelp",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text"
  },
  {
    title: "Calendar",
    path: "/calendar",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text"
  },
  {
    title: "Help",
    path: "/help",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    className: "nav-text"
  }
];
