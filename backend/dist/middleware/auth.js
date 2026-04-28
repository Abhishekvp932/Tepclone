"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = void 0;
const container_1 = require("../container");
const requireAdmin = (req, res, next) => {
    const bearerToken = req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.split(" ")[1]
        : undefined;
    const token = req.cookies?.adminToken || bearerToken;
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    try {
        const decoded = container_1.container.tokenService.verifyAdminToken(token);
        req.adminId = decoded.adminId;
        next();
    }
    catch {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};
exports.requireAdmin = requireAdmin;
