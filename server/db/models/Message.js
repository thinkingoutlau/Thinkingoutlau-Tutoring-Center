const Sequelize = require("sequelize");
const db = require("../db");
// const User = require("./User");

const Message = db.define(
  "message",
  {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
  // {
  //   defaultScope: {
  //     include: [{ model: User }],
  //   },
  // }
);

module.exports = Message;
