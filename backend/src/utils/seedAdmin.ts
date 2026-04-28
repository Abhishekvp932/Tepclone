import bcrypt from "bcrypt";
import { AdminRepository } from "../repositories/AdminRepository";

export const seedAdmin = async () => {
  const adminRepository = new AdminRepository();
  const email = (process.env.ADMIN_EMAIL || "admin@tapclone.com").toLowerCase();
  const password = process.env.ADMIN_PASSWORD || "Admin@123";
  const name = process.env.ADMIN_NAME || "Admin";

  const existing = await adminRepository.findByEmail(email);
  if (existing) return;

  const hashedPassword = await bcrypt.hash(password, 10);
  await adminRepository.create({ name, email, password: hashedPassword });

  console.log(`Default admin created: ${email}`);
};
