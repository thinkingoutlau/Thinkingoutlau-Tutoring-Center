const db = require("./db");
const User = require("./models/User");
const Message = require("./models/Message");
const Image = require("./models/Image");

User.hasMany(Message);
Message.belongsTo(User);

User.hasMany(Image);
Image.belongsTo(User);

module.exports = {
  db,
  Message,
  User,
  Image
};
