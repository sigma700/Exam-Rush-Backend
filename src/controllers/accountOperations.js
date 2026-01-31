import {User} from "../database/userSchema.js";
import bcrypt from "bcrypt";

export const createAccount = async (
  firstName,
  lastName,
  password,
  institution,
  course,
  yearOfStudy,
  goals,
) => {
  //now we need to make any necessary adjustment needed for the information that the user has provided
  try {
    const changedPass = await bcrypt.hash(password, 12);

    const requiredContent = ({
      firstName,
      lastName,
      changedPass,
      institution,
      course,
      yearOfStudy,
      goals,
    } = req.body);

    await User.create({
      requiredContent,
    });

    res.status(201).json({
      message: "User creation algorithm works !",
      success: true,
    });

    //create and save to the DB
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "There was an error please check console for more info !",
      success: false,
    });
  }
};
export const logintoAccount = () => {};
export const verifyEmail = () => {};
