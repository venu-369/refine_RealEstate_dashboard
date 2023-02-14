import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {};

const createUser = async (req, res) => {
  const { name, email, avatar } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(200).json(userExists);

  const newUser = await User.create({
    name,
    email,
    avatar,
  });

  res.status(200).json(newUser);
};

const getUserInfoById = async (req, res) => {};

export { getAllUsers, createUser, getUserInfoById };
