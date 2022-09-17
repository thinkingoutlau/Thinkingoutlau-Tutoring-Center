const Sequelize = require("sequelize");
const db = require("../database");
const User = require("./User");

module.exports = db.define(
  "message",
  {
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    defaultScope: {
      include: [{ model: User }],
    },
  }
);
