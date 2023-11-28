import mongoose from "mongoose";

const dbURL = "mongodb://localhost:27017/cleaningServices";

const connect = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("db connected");
  } catch (er) {
    console.log(er);
  }
};

export default connect;
