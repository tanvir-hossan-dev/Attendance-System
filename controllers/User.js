const authModel = require("../Models/authModel");

const getUsers = async (req, res) => {
  try {
    const users = await authModel.find();
    console.log(users);
    res.status(201).json({ Message: "user get successful", users });
  } catch (err) {}
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    console.log(userId);
    const getUserById = await authModel.findById(userId);
    console.log(getUserById);
    res.status(201).json(getUserById);
  } catch (err) {
    console.log(err);
  }
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const deleteUserById = await authModel.findByIdAndDelete(userId);
    res.status(203).json();
  } catch (err) {
    console.log(err);
  }
};

const updatUserById = async (req, res) => {
  const { name, accountStatus, roles } = req.body;
  const { userId } = req.params;
  try {
    const update = await authModel.findByIdAndUpdate(
      userId,
      {
        name,
        accountStatus,
        roles,
      },
      { new: true }
    );
    res.status(201).json({ Message: "Update Successful", update });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUsers, getUserById, deleteUserById, updatUserById };
