import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

const getAllProperties = async (req, res) => {};
const getPropertyDetail = async (req, res) => {};

const createProperty = async (req, res) => {
  const { title, description, propertyType, location, price, photo, email } =
    req.body;

  //start a session
  const session = await mongoose.startSession();
  session.startTransaction();

  const user = await user.findOne({ email }).session(session);

  if (!user) throw new Error("User not found");

  //const photoUrl = ...
};

const updateProperty = async (req, res) => {};
const deleteProperty = async (req, res) => {};

export {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
};
