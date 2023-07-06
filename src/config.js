import "dotenv/config";

export const TOKEN_SECRET = "clave secreta";

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/nose";

export const PORT = process.env.PORT || 4000;
