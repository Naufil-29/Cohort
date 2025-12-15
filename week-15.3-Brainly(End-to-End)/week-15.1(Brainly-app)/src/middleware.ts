import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_PASSWORD = "Brainly2908";

// Define custom Request interface
interface AuthRequest extends Request {
  userId?: string;
}

export const userMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction                                                              
) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(403).json({
      message: "Authorization header missing"
    });
  }

  try {
    const decoded = jwt.verify(header, JWT_PASSWORD) as { id: string };
    req.userId = decoded.id; // ✅ No @ts-ignore needed
    next();
  } catch (error) {
    res.status(403).json({
      message: "Invalid token"
    });
  }
};