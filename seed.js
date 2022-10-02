const { db, User, Message, Image } = require("./server/db");

const users = [
  { username: "moe", password: "moe_pw" },
  { username: "lucy", password: "lucy_pw" },
  { username: "ethyl", password: "ethyl_pw" },
  { username: "thinkingoutlau", password: "hello" }
];

// const id = () => Math.round(Math.random() * (users.length - 1)) + 1;

const messages = [
  { userId: 1, content: "Hello!" },
  { userId: 2, content: "Good morning!" },
  { userId: 3, content: "Welcome to ThinkingOutLau Tutoring Center" }
];

const images = [
  {
    userId: 4,
    name: "homework1",
    data:
      "https://media.istockphoto.com/vectors/hand-writing-mathematics-formula-vector-vector-id485670257?k=20&m=485670257&s=612x612&w=0&h=ZhHMktLKXpaTTXYPcfqqeqVFJVD2XjbK0X_p2sS0Lew="
  }
];

const seed = () =>
  Promise.all(users.map(user => User.create(user))).then(() =>
    Promise.all(messages.map(message => Message.create(message))).then(() =>
      Promise.all(images.map(image => Image.create(image)))
    )
  );

const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
