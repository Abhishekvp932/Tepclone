"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./confiq/db"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const serviceRoutes_1 = __importDefault(require("./routes/serviceRoutes"));
const seedAdmin_1 = require("./utils/seedAdmin");
const errorHandler_1 = require("./middleware/errorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOperation = {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
};
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOperation));
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "10mb" }));
app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "API is running" });
});
app.use("/api/auth", authRoutes_1.default);
app.use("/api/services", serviceRoutes_1.default);
app.use(errorHandler_1.errorHandler);
const PORT = process.env.PORT || 4000;
const startServer = async () => {
    await (0, db_1.default)();
    await (0, seedAdmin_1.seedAdmin)();
    app.listen(PORT, () => {
        console.log("Server running on port", PORT);
    });
};
startServer();
