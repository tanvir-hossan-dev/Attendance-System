const {
  getUsers,
  getUserById,
  deleteUserById,
  updatUserById,
} = require("../controllers/User");
const router = require("express").Router();

router.get("/:userId", getUserById);
router.patch("/:userId", updatUserById);
router.delete("/:userId", deleteUserById);
router.get("/", getUsers);

module.exports = router;
