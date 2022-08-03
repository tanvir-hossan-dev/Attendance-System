const router = require("express").Router();
const Auth = require("./Auth");

router.use("/api/v1/auth", Auth);

module.exports = router;
