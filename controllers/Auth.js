const authModel = require("../Models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      res.status(400).json({ Message: "Please provide your all information" });
    }
    const userData = await authModel.findOne({ email });
    if (userData) {
      return res.status(400).json({ Message: "This email already in use" });
    }
    let post = new authModel({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    post.password = hash;
    await post.save();
    res.status(200).json({ Message: "register successful", post });
  } catch (err) {
    console.log(err);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ Message: "invalid email" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ Message: "invalid password" });
    }
    const userInfo = {
      name: user.name,
      email: user.email,
      _id: user._id,
    };
    const token = jwt.sign(userInfo, process.env.SECRET_KEY);
    res.status(200).json({ Message: "Login successful", token });
  } catch (err) {}
};

module.exports = { Register, Login };
