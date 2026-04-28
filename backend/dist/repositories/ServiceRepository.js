"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRepository = void 0;
const Service_1 = __importDefault(require("../models/Service"));
class ServiceRepository {
    findActive() {
        return Service_1.default.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
    }
    findAll() {
        return Service_1.default.find().sort({ order: 1, createdAt: 1 });
    }
    create(data) {
        return Service_1.default.create(data);
    }
    updateById(id, data) {
        return Service_1.default.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }
    deleteById(id) {
        return Service_1.default.findByIdAndDelete(id);
    }
}
exports.ServiceRepository = ServiceRepository;
