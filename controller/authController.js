import bcrypt from "bcryptjs";
import { User } from "../model/user.js";

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

export async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "Fill all Field(email, password)" })
    }

    const findUser = await User.findOne({ email });
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (!findUser || !passwordMatch) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
