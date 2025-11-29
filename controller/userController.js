import { User } from "../model/user.js";

export async function handleCurrentSite(req, res) {
    try {
        const user = await User.findOne({ _id: req.user.id });
        return res.status(200).json({ id: user._id, name: user.name, email: user.email });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}