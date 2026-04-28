import { Router } from "express";
import { container } from "../container";
import { requireAdmin } from "../middleware/auth";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();
const serviceController = container.serviceController;

router.get("/", asyncHandler(serviceController.publicList));
router.get("/admin", requireAdmin, asyncHandler(serviceController.adminList));
router.post("/", requireAdmin, asyncHandler(serviceController.create));
router.put("/:id", requireAdmin, asyncHandler(serviceController.update));
router.delete("/:id", requireAdmin, asyncHandler(serviceController.remove));

export default router;
