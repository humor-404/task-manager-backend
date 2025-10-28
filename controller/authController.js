import bcrypt from 'bcryptjs';
import { User } from "../model/user.js";

export async function handleSignup(req, res) {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(422).json({ message: "Please fill all field(name, email, password)" }); //422 error -> invalid input data from user
        }

        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(409).json({ message: "Email is already taken" }); //409 -> Conflict
        }

        const hasedPassword = bcrypt(password, 10);
        const newUser = await User.create({
            username: username,
            email: email,
            pasword: hasedPassword,
        });

        return res.status(200).json({
            message: "Register Success",
            id: newUser._id,
        });

    } catch (error) {
        return res.status(500).json({ message: error.message }); //500 erro -> something went wrong on server side
    }
}

export function handleLogin(req, res) {

}