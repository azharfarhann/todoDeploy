import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ silent: true });

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    let JWT_SECRET = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded; // Add payload (e.g., userId, email) to req object

    next(); // continue to route
  } catch (err) {
    console.error("JWT Error:", err);
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

export default verifyToken;
