import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export function ensureAuth(req, res, next) {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
        return res.status(401).json({ message: "Access Token not found" });
    }
    try {
        const decodeAccessToken = jwt.verify(accessToken, process.env.access_token_secret);
        req.user = { id: decodeAccessToken.userId };
        next();

    } catch (error) {
        return res.status(401).json({ message: 'Access Token invalid or expire ' });
    }

}