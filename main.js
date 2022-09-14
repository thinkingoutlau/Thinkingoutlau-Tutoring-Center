// say our sequelize instance is create in 'db.js'
const { db } = require("./server/db");
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require("./server");
const port = process.env.PORT || 3000;
// const { syncAndSeed } = require("./db");
const { syncAndSeed } = require("./server/db");

const init = async () => {
  try {
    await syncAndSeed();
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
