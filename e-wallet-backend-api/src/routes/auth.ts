import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { checkJwt } from "../middleware/checkJwt";
import { asyncHandler } from "../middleware/asyncHandler";

const router = Router();
// Login route.
router.post("/login", asyncHandler(AuthController.login));

export default router;
