"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const AppError_1 = require("../utils/AppError");
class AuthService {
    constructor(adminRepository, tokenService) {
        this.adminRepository = adminRepository;
        this.tokenService = tokenService;
    }
    async login(email, password) {
        if (!email || !password) {
            throw new AppError_1.AppError("Email and password are required", 400);
        }
        const admin = await this.adminRepository.findByEmailWithPassword(email);
        if (!admin) {
            throw new AppError_1.AppError("Invalid credentials", 401);
        }
        const isMatch = await bcrypt_1.default.compare(password, admin.password);
        if (!isMatch) {
            throw new AppError_1.AppError("Invalid credentials", 401);
        }
        const token = this.tokenService.createAdminToken(admin._id.toString());
        return {
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
            },
        };
    }
    async getProfile(adminId) {
        if (!adminId) {
            throw new AppError_1.AppError("Unauthorized", 401);
        }
        const admin = await this.adminRepository.findById(adminId);
        if (!admin) {
            throw new AppError_1.AppError("Admin not found", 404);
        }
        return {
            id: admin._id,
            name: admin.name,
            email: admin.email,
        };
    }
}
exports.AuthService = AuthService;
