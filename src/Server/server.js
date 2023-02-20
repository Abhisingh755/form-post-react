// src/server.js

const express = require("express");
const bodyParser = require("body-parser");
const CircularJSON = require("circular-json");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(JSON.stringify(req));
  const jsonString = CircularJSON.stringify(res);
  const parsedObj = CircularJSON.parse(jsonString);
});

app.post("/", (req, res) => {
  const jsonString = CircularJSON.stringify(res);
  const parsedObj = CircularJSON.parse(jsonString);
  getallDetails(parsedObj.req.body, res);

  res.send();
});

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

const getallDetails = (arrgument, res) => {
  console.log(arrgument);
  res.redirect("http://techs-mbp:3000/page");
};
