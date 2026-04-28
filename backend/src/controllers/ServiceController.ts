import { Request, Response } from "express";
import { ServiceService } from "../services/ServiceService";
import { AppError } from "../utils/AppError";

const getRouteId = (req: Request) => {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new AppError("Invalid service id", 400);
  }

  return id;
};

export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  publicList = async (_req: Request, res: Response) => {
    const services = await this.serviceService.getPublicServices();
    return res.json({ success: true, data: services });
  };

  adminList = async (_req: Request, res: Response) => {
    const services = await this.serviceService.getAdminServices();
    return res.json({ success: true, data: services });
  };

  create = async (req: Request, res: Response) => {
    const service = await this.serviceService.createService(req.body);
    return res.status(201).json({ success: true, data: service });
  };

  update = async (req: Request, res: Response) => {
    const service = await this.serviceService.updateService(
      getRouteId(req),
      req.body
    );
    return res.json({ success: true, data: service });
  };

  remove = async (req: Request, res: Response) => {
    await this.serviceService.deleteService(getRouteId(req));
    return res.json({ success: true });
  };
}
