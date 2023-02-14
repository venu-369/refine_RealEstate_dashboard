import Property from "../mongodb/models/property.js";
import User from "../mongodb/models/user.js";

import * as dotenev from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenev.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllProperties = async (req, res) => {};
const getPropertyDetail = async (req, res) => {};

const createProperty = async (req, res) => {
 try {
    const { title, description, propertyType, location, price, photo, email } =
    req.body;

  //start a session
  const session = await mongoose.startSession();
  session.startTransaction();

  const user = await user.findOne({ email }).session(session);

  if (!user) throw new Error("User not found");

  const photoUrl = await cloudinary.uploader.upload(photo);

  const newProperty = await Property.create({
    title,
    description,
    propertyType,
    location,
    price,
    photo: photoUrl.url,
    creator: user._id,
  });

  user.allProperties.push(newProperty._id);

  await user.save({ session });

  await session.commitTransaction();

  res.status(200).json({ message: "Property cerates successfully" });}
  
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
