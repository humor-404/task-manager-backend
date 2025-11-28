import bcrypt from "bcryptjs";
import { User } from "../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//----Signup Handler----
export async function handleSignup(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(422)
        .json({ message: "Please fill all field(name, email, password)" }); //422 error -> invalid input data from user
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(409).json({ message: "Email is already taken" }); //409 -> Conflict
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hasedPassword,
    });

    return res.status(200).json({
      message: "Register Success",
      id: newUser._id,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message }); //500 erro -> something went wrong on server side
  }
}

//----Login Handler----
export async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "Fill all Field(email, password)" })
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(404).json({ message: "Invalid email or password" });
    }
    const accessToken = jwt.sign(
      {
        userId: user._id,
      },
      process.env.accessTokenSecret,
      {
        subject: "accesToken",
        expiresIn: process.env.accessTokenExpiresIn
      }
    );

    const refreshToken = jwt.sign(
      {
        userId: user._id,
      },
      process.env.refreshTokenSecret,
      {
        subject: "refreshToken",
        expiresIn: process.env.refreshTokenExpiresIn
      }
    );

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
