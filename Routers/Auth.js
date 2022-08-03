const router = require("express").Router();
const Auth = require("../controllers/Auth");

router.post("/register", Auth.Register);

router.post("/login", Auth.Login);

module.exports = router;
