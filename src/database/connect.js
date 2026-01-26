import mongoose from "mongoose";
import mongdb from "mongodb";
import "dotenv/config";

//function for connecting with the database for making database operations

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to the database succesfully !");
  } catch (error) {
    console.error(error, "An error occured while connecting to the database !");
  }
};
