import { Router } from "express";
import { container } from "../container";
import { requireAdmin } from "../middleware/auth";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();
const adminController = container.adminController;

router.post("/login", asyncHandler(adminController.login));
router.post("/logout", asyncHandler(adminController.logout));
router.get("/me", requireAdmin, asyncHandler(adminController.me));

export default router;
