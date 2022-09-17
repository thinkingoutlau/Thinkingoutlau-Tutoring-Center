const Sequelize = require("sequelize");
const db = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;

// User.prototype.correctPassword = function (candidatePwd) {
//   //we need to compare the plain version to an encrypted version of the password
//   return bcrypt.compare(candidatePwd, this.password);
// };

User.prototype.generateToken = function () {
  return { token: this.id };
  // return jwt.sign({ token: this.id }, process.env.JWT);
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

// User.authenticate = async function ({ username, password }) {
//   const user = await this.findOne({ where: { username } });
//   if (!user || !(await user.correctPassword(password))) {
//     const error = Error("Incorrect username/password");
//     error.status = 401;
//     throw error;
//   }
//   return user.generateToken();
// };

// User.findByToken = async function (token) {
//   try {
//     const { id } = await jwt.verify(token, process.env.JWT);
//     const user = User.findByPk(id);
//     if (!user) {
//       throw "nooo";
//     }
//     return user;
//   } catch (ex) {
//     const error = Error("bad token");
//     error.status = 401;
//     throw error;
//   }
// };

// /**
//  * hooks
//  */
// const hashPassword = async (user) => {
//   //in case the password has been changed, we want to encrypt it with bcrypt
//   if (user.changed("password")) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// };
