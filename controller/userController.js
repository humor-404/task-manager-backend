import { User } from "../model/user.js";
import { Task } from "../model/task.js";

// export async function handleCurrentSite(req, res) {
//     try {
//         const user = await User.findOne({ _id: req.user.id });
//         return res.status(200).json({ id: user._id, name: user.name, email: user.email });
//     } catch (error) {
//         res.status(401).json({ message: error.message });
//     }
// }

export async function handleTask(req, res) {
    try {
        const { title, description, completed, userId } = req.body;
        if (!title || !description || !userId) {
            return res.status(400).json({
                message: "Please enter the required field(title, description, userId)"
            });
        }
        await Task.create({
            title: title,
            description: description,
            completed: completed,
            userId: req.user.id
        });
        return res.status(200).json({ message: "Task Added Successfully" });
    } catch(error) {
        return res.status(411).json({ status: error.message });
    }
}
export function getTask(req, res) {

}
export function getTaskByID(req, res) {

}
export function updateTask(req, res) {

}
export function deleteTask(req, res) {

}