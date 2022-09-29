const { db, User, Message } = require("./server/db");

const users = [
  { username: "moe", password: "moe_pw" },
  { username: "lucy", password: "lucy_pw" },
  { username: "ethyl", password: "ethyl_pw" },
  { username: "thinkingoutlau", password: "hello" },
];

// const id = () => Math.round(Math.random() * (users.length - 1)) + 1;

const messages = [
  { userId: 1, content: "Hello!" },
  { userId: 2, content: "Good morning!" },
  { userId: 3, content: "Welcome to ThinkingOutLau Tutoring Center" },
];

const seed = () =>
  Promise.all(users.map((user) => User.create(user))).then(() =>
    Promise.all(messages.map((message) => Message.create(message)))
  );

const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch((err) => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
