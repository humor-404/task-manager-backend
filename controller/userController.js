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
        const { title, description, completed } = req.body;
        if (!title || !description) {
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
    } catch (error) {
        return res.status(411).json({ status: error.message });
    }
}
export async function getTask(req, res) {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        if (tasks.length == 0) {
            return res.status(404).json({ message: "Task not found" });
        }
        return res.status(200).json({
            count: tasks.length,
            tasks
        });
    } catch (error) {
        return res.status(411).json({ status: error.message });
    }
}
export async function getTaskByID(req, res) {
    try {
        const taskId = req.params.id;
        if (!taskId) {
            return res.status(400).json({ message: "provide id of a task" });
        }
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "task not found" });
        }
        return res.status(200).json({ task });
    } catch (error) {
        return res.status(411).json({ status: error.message });
    }
}
export function updateTask(req, res) {
    const taskId = req.params.id;
    if (!taskId) {
        return res.status(400).json({ message: "provide id of a task" });
    }

}
export function deleteTask(req, res) {

}