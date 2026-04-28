"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const Admin_1 = __importDefault(require("../models/Admin"));
class AdminRepository {
    findByEmailWithPassword(email) {
        return Admin_1.default.findOne({ email: email.toLowerCase() }).select("+password");
    }
    findById(id) {
        return Admin_1.default.findById(id);
    }
    findByEmail(email) {
        return Admin_1.default.findOne({ email: email.toLowerCase() });
    }
    create(data) {
        return Admin_1.default.create({
            ...data,
            email: data.email.toLowerCase(),
        });
    }
}
exports.AdminRepository = AdminRepository;
