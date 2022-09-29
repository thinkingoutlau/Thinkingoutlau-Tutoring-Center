const { db } = require("./server/db");
const app = require("./server");
const port = process.env.PORT || 3000;

const init = async () => {
  try {
    const server = app.listen(port, () => {
      console.log(`listening on port ${port}`);
      const io = require("socket.io")(server);
      require("./server/socket")(io);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
