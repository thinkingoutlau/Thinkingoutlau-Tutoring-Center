// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const User = require("./models/User");
const Message = require("./models/Message");

//associations

const syncAndSeed = async () => {
  await db.sync({ force: true });
  const credentials = [
    { username: "moe", password: "moe_pw" },
    { username: "lucy", password: "lucy_pw" },
    { username: "ethyl", password: "ethyl_pw" },
    { username: "thinkingoutlau", password: "hello" },
  ];
  const promises = credentials.map((credential) => User.create(credential));
  await Promise.all(promises);
};
module.exports = {
  db,
  syncAndSeed,
  models: {
    User,
    Message,
  },
};
