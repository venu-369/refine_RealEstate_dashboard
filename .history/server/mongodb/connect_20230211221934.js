import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("struictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));
};

export default connectDB;
