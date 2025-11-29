import express from 'express';
import { handleLogin, handleSignup, handleRefreshToken } from '../controller/authController.js';

const router = express.Router();

router.post('/signup', handleSignup);
router.post('/login', handleLogin);
router.post('/refreshtoken', handleRefreshToken);

export default router;