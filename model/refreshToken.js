import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema({
  refreshToken: {
    type: String,
  },
});

export const RefreshToken = new mongoose.model(
  "refresh_token",
  refreshTokenSchema
);
