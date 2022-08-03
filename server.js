require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routers/index");

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.DB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Port ${port} is listening`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
