require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");
const router = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("GET request!\n");
});

app.post("/", (req, res) => {
  res.send("POST request\n");
});

app.use("/api", router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listening on port ${process.env.PORT}`);
  }
});
