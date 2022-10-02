const Sequelize = require("sequelize");
const db = require("../db");
// const User = require("./User");

const Image = db.define("image", {
  name: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.TEXT
  }
});

module.exports = Image;
