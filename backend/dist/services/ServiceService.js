"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const AppError_1 = require("../utils/AppError");
class ServiceService {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    getPublicServices() {
        return this.serviceRepository.findActive();
    }
    getAdminServices() {
        return this.serviceRepository.findAll();
    }
    createService(input) {
        return this.serviceRepository.create(this.normalizeInput(input));
    }
    async updateService(id, input) {
        const service = await this.serviceRepository.updateById(id, this.normalizeInput(input));
        if (!service) {
            throw new AppError_1.AppError("Service not found", 404);
        }
        return service;
    }
    async deleteService(id) {
        const service = await this.serviceRepository.deleteById(id);
        if (!service) {
            throw new AppError_1.AppError("Service not found", 404);
        }
    }
    normalizeInput(input) {
        const title = input.title?.trim();
        const description = input.description?.trim();
        if (!title || !description) {
            throw new AppError_1.AppError("Title and description are required", 400);
        }
        return {
            title,
            description,
            icon: input.icon?.trim() || "default",
            order: Number(input.order || 0),
            isActive: input.isActive !== false,
        };
    }
}
exports.ServiceService = ServiceService;
