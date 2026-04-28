"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const mongoURL = process.env.MONGO_URL?.trim();
        if (!mongoURL) {
            throw new Error("MONGO_URL is not set in the environment");
        }
        const conn = await mongoose_1.default.connect(mongoURL);
        console.log("Database connected", conn.connection.name);
    }
    catch (error) {
        console.error("Database connection error", error);
        process.exit(1);
    }
};
exports.default = connectDB;
