const Sequelize = require("sequelize");
const db = require("../database");
// const jwt = require("jsonwebtoken");
// const axios = require("axios");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;

User.prototype.generateToken = function () {
  return { token: this.id };
};

User.findByToken = async (token) => {
  try {
    const user = await User.findByPk(token);
    if (!user) {
      const error = Error("bad credentials");
      error.status = 401;
      throw error;
    }
    return user;
  } catch (error) {
    next(error);
  }
};

User.authenticate = async ({ username, password }) => {
  const user = await User.findOne({
    where: {
      username,
      password,
    },
  });
  if (!user) {
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};
