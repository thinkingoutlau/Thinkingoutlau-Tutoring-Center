const path = require("path");
const express = require("express");
const morgan = require("morgan");
const db = require("./db/db");
// const volleyball = require("volleyball");
const app = express();
const bodyParser = require("body-parser");

db.sync().then(() => console.log("Database is synced"));

// logging middleware
app.use(morgan("dev"));

// status middleware
app.use(express.static(path.join(__dirname, "../public")));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// include our routes
app.use("/api", require("./api"));

// 404 middleware
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ? res.status(404).send("Not found") : next()
);

// Send index.html for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling middleware
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
