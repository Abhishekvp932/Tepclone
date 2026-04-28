"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const AdminController_1 = require("./controllers/AdminController");
const ServiceController_1 = require("./controllers/ServiceController");
const AdminRepository_1 = require("./repositories/AdminRepository");
const ServiceRepository_1 = require("./repositories/ServiceRepository");
const AuthService_1 = require("./services/AuthService");
const ServiceService_1 = require("./services/ServiceService");
const TokenService_1 = require("./services/TokenService");
const adminRepository = new AdminRepository_1.AdminRepository();
const serviceRepository = new ServiceRepository_1.ServiceRepository();
const tokenService = new TokenService_1.TokenService();
const authService = new AuthService_1.AuthService(adminRepository, tokenService);
const serviceService = new ServiceService_1.ServiceService(serviceRepository);
exports.container = {
    adminRepository,
    serviceRepository,
    tokenService,
    authService,
    serviceService,
    adminController: new AdminController_1.AdminController(authService),
    serviceController: new ServiceController_1.ServiceController(serviceService),
};
