import express from 'express';
import { handleCurrentSite } from '../controller/userController.js';
import { authorized } from '../middleware/auth.js';

const router = express.Router();

router.get('current', authorized, handleCurrentSite);

export default router;