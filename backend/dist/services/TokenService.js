"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    constructor() {
        this.secret = process.env.JWT_SECRET || "tapclone-admin-secret";
    }
    createAdminToken(adminId) {
        return jsonwebtoken_1.default.sign({ adminId }, this.secret, { expiresIn: "7d" });
    }
    verifyAdminToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secret);
    }
}
exports.TokenService = TokenService;
