const router = require("express").Router();
const Auth = require("./Auth");
const userRouter = require("./User");
const Authenticate = require("../Middleware/Authenticate");

router.use("/api/v1/auth", Auth);
router.use("/api/v1/user", Authenticate, userRouter);

module.exports = router;
