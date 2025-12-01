import { Task } from "../model/task.js";

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
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user.id
        });
        if (!task) {
            return res.status(404).json({ message: "task not found" });
        }

        return res.status(200).json({ task });
    } catch (error) {
        return res.status(411).json({ status: error.message });
    }
}

export async function updateTask(req, res) {
    try {
        const { title, description, completed } = req.body;
        const task = await Task.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (completed !== undefined) task.completed = completed;
        
        const updatedTask = await task.save();

        return res.status(200).json({ updatedTask });
    } catch (error) {
        return res.status(411).json({ status: error.message });
    }
}

export function deleteTask(req, res) {

}