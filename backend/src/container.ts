import { AdminController } from "./controllers/AdminController";
import { ServiceController } from "./controllers/ServiceController";
import { AdminRepository } from "./repositories/AdminRepository";
import { ServiceRepository } from "./repositories/ServiceRepository";
import { AuthService } from "./services/AuthService";
import { ServiceService } from "./services/ServiceService";
import { TokenService } from "./services/TokenService";

const adminRepository = new AdminRepository();
const serviceRepository = new ServiceRepository();
const tokenService = new TokenService();
const authService = new AuthService(adminRepository, tokenService);
const serviceService = new ServiceService(serviceRepository);

export const container = {
  adminRepository,
  serviceRepository,
  tokenService,
  authService,
  serviceService,
  adminController: new AdminController(authService),
  serviceController: new ServiceController(serviceService),
};
