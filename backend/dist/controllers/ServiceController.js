"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const AppError_1 = require("../utils/AppError");
const getRouteId = (req) => {
    const id = req.params.id;
    if (!id || Array.isArray(id)) {
        throw new AppError_1.AppError("Invalid service id", 400);
    }
    return id;
};
class ServiceController {
    constructor(serviceService) {
        this.serviceService = serviceService;
        this.publicList = async (_req, res) => {
            const services = await this.serviceService.getPublicServices();
            return res.json({ success: true, data: services });
        };
        this.adminList = async (_req, res) => {
            const services = await this.serviceService.getAdminServices();
            return res.json({ success: true, data: services });
        };
        this.create = async (req, res) => {
            const service = await this.serviceService.createService(req.body);
            return res.status(201).json({ success: true, data: service });
        };
        this.update = async (req, res) => {
            const service = await this.serviceService.updateService(getRouteId(req), req.body);
            return res.json({ success: true, data: service });
        };
        this.remove = async (req, res) => {
            await this.serviceService.deleteService(getRouteId(req));
            return res.json({ success: true });
        };
    }
}
exports.ServiceController = ServiceController;
