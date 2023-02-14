import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {};

const createUser = async (req, res) => {
  const { name, email, avatar } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(200).send({ message: "User already exists" });
  }
};

const getUserInfoById = async (req, res) => {};

export { getAllUsers, createUser, getUserInfoById };
