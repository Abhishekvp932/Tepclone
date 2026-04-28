import bcrypt from "bcrypt";
import { AdminRepository } from "../repositories/AdminRepository";
import { AppError } from "../utils/AppError";
import { TokenService } from "./TokenService";

export class AuthService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly tokenService: TokenService
  ) {}

  async login(email: string, password: string) {
    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }

    const admin = await this.adminRepository.findByEmailWithPassword(email);

    if (!admin) {
      throw new AppError("Invalid credentials", 401);
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = this.tokenService.createAdminToken(admin._id.toString());

    return {
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    };
  }

  async getProfile(adminId?: string) {
    if (!adminId) {
      throw new AppError("Unauthorized", 401);
    }

    const admin = await this.adminRepository.findById(adminId);

    if (!admin) {
      throw new AppError("Admin not found", 404);
    }

    return {
      id: admin._id,
      name: admin.name,
      email: admin.email,
    };
  }
}
