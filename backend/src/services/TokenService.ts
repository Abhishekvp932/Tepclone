import jwt from "jsonwebtoken";

type TokenPayload = {
  adminId: string;
};

export class TokenService {
  private readonly secret = process.env.JWT_SECRET || "tapclone-admin-secret";

  createAdminToken(adminId: string) {
    return jwt.sign({ adminId }, this.secret, { expiresIn: "7d" });
  }

  verifyAdminToken(token: string) {
    return jwt.verify(token, this.secret) as TokenPayload;
  }
}
