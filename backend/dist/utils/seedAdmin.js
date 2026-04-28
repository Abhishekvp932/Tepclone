"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const AdminRepository_1 = require("../repositories/AdminRepository");
const seedAdmin = async () => {
    const adminRepository = new AdminRepository_1.AdminRepository();
    const email = (process.env.ADMIN_EMAIL || "admin@tapclone.com").toLowerCase();
    const password = process.env.ADMIN_PASSWORD || "Admin@123";
    const name = process.env.ADMIN_NAME || "Admin";
    const existing = await adminRepository.findByEmail(email);
    if (existing)
        return;
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    await adminRepository.create({ name, email, password: hashedPassword });
    console.log(`Default admin created: ${email}`);
};
exports.seedAdmin = seedAdmin;
