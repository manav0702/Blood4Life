const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, (res) => {
  console.log("Server is Started on port " + port);
});
