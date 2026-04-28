import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import { AuthService } from "../services/AuthService";

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export class AdminController {
  constructor(private readonly authService: AuthService) {}

  login = async (req: Request, res: Response) => {
    const { token, admin } = await this.authService.login(
      req.body.email,
      req.body.password
    );

    res.cookie("adminToken", token, cookieOptions);

    return res.json({
      success: true,
      token,
      data: admin,
    });
  };

  logout = async (_req: Request, res: Response) => {
    res.clearCookie("adminToken");
    return res.json({ success: true });
  };

  me = async (req: AuthRequest, res: Response) => {
    const admin = await this.authService.getProfile(req.adminId);
    return res.json({ success: true, data: admin });
  };
}
