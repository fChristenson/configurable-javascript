const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const todos = ["foo", "bar", "baz", undefined];

app.get("/todos", (req, res) => {
  res.json(todos);
});

module.exports = app;
