require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routers/index");
const Authenticate = require("./Middleware/Authenticate");

const app = express();

app.use(express.json());

app.use(router);

app.get("/private", Authenticate, async (req, res) => {
  res.json({ Message: "This is private router" });
});

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
