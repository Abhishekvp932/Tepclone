"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const cookieOptions = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
};
class AdminController {
    constructor(authService) {
        this.authService = authService;
        this.login = async (req, res) => {
            const { token, admin } = await this.authService.login(req.body.email, req.body.password);
            res.cookie("adminToken", token, cookieOptions);
            return res.json({
                success: true,
                token,
                data: admin,
            });
        };
        this.logout = async (_req, res) => {
            res.clearCookie("adminToken");
            return res.json({ success: true });
        };
        this.me = async (req, res) => {
            const admin = await this.authService.getProfile(req.adminId);
            return res.json({ success: true, data: admin });
        };
    }
}
exports.AdminController = AdminController;
