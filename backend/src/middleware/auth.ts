import { NextFunction, Request, Response } from "express";
import { container } from "../container";

export type AuthRequest = Request & {
  adminId?: string;
};

export const requireAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : undefined;
  const token = req.cookies?.adminToken || bearerToken;

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = container.tokenService.verifyAdminToken(token);
    req.adminId = decoded.adminId;
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
