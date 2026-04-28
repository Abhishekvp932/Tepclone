import Admin from "../models/Admin";

export class AdminRepository {
  findByEmailWithPassword(email: string) {
    return Admin.findOne({ email: email.toLowerCase() }).select("+password");
  }

  findById(id: string) {
    return Admin.findById(id);
  }

  findByEmail(email: string) {
    return Admin.findOne({ email: email.toLowerCase() });
  }

  create(data: { name: string; email: string; password: string }) {
    return Admin.create({
      ...data,
      email: data.email.toLowerCase(),
    });
  }
}
