import express from 'express';
import { handleTask, getTask, getTaskByID, updateTask, deleteTask } from '../controller/userController.js';
import { ensureAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/tasks', ensureAuth, handleTask);
router.get('/tasks', ensureAuth, getTask);
router.get('/task/:id', ensureAuth, getTaskByID);
router.patch('/task/:id', ensureAuth, updateTask);
router.delete('/task/:id', ensureAuth, deleteTask);

export default router;