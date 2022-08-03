const jwt = require("jsonwebtoken");
const authModel = require("../Models/authModel");

const Authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(400).json({ Message: "provide token" });
    }

    const decoded = jwt.verify(authorization, process.env.SECRET_KEY);
    const email = decoded.email;
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ Message: "Invalid  token" });
    }
    next();
  } catch (err) {}
};

module.exports = Authenticate;
