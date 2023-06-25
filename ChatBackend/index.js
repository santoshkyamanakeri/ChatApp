const express = require("express");

const config = require("./config/app");

const app = express();

app.get("/home", (req, res) => {
  return res.send("Home World!");
});

app.get("/login", (req, res) => {
  return res.send("Login World!");
});

const port = config.appPort;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log("Hello world!");
