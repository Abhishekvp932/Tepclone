import Service from "../models/Service";

export type ServicePayload = {
  title: string;
  description: string;
  icon: string;
  order: number;
  isActive: boolean;
};

export class ServiceRepository {
  findActive() {
    return Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
  }

  findAll() {
    return Service.find().sort({ order: 1, createdAt: 1 });
  }

  create(data: ServicePayload) {
    return Service.create(data);
  }

  updateById(id: string, data: ServicePayload) {
    return Service.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  deleteById(id: string) {
    return Service.findByIdAndDelete(id);
  }
}
