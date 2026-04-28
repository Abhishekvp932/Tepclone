import {
  ServicePayload,
  ServiceRepository,
} from "../repositories/ServiceRepository";
import { AppError } from "../utils/AppError";

type RawServiceInput = {
  title?: string;
  description?: string;
  icon?: string;
  order?: number | string;
  isActive?: boolean;
};

export class ServiceService {
  constructor(private readonly serviceRepository: ServiceRepository) {}

  getPublicServices() {
    return this.serviceRepository.findActive();
  }

  getAdminServices() {
    return this.serviceRepository.findAll();
  }

  createService(input: RawServiceInput) {
    return this.serviceRepository.create(this.normalizeInput(input));
  }

  async updateService(id: string, input: RawServiceInput) {
    const service = await this.serviceRepository.updateById(
      id,
      this.normalizeInput(input)
    );

    if (!service) {
      throw new AppError("Service not found", 404);
    }

    return service;
  }

  async deleteService(id: string) {
    const service = await this.serviceRepository.deleteById(id);

    if (!service) {
      throw new AppError("Service not found", 404);
    }
  }

  private normalizeInput(input: RawServiceInput): ServicePayload {
    const title = input.title?.trim();
    const description = input.description?.trim();

    if (!title || !description) {
      throw new AppError("Title and description are required", 400);
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
