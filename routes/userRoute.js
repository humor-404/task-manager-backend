import express from 'express';
import { handleTask, getTask, getTaskByID, updateTask, deleteTask } from '../controller/userController.js';
import { ensureAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/tasks', ensureAuth, handleTask); //create a task
router.get('/tasks', ensureAuth, getTask); //view all tasks
router.get('/task/:id', ensureAuth, getTaskByID); //view task by id
router.patch('/task/:id', ensureAuth, updateTask); //update a task
router.delete('/task/:id', ensureAuth, deleteTask); //delete a task

export default router;