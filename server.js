const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log(`user visited ${req.url}`);
  res.end("Welcome to my site!");
});

app.get("/complement", function (req, res) {
  console.log(`user visited ${req.url}`);
  res.end("You look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");
