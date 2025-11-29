import express from 'express';
import { handleCurrentSite } from '../controller/userController.js';

const router = express.Router();

router.get('current', handleCurrentSite);

export default router;