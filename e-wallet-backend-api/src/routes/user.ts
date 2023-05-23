import { Router } from "express";
import UserController from "../controllers/UserController";
import { asyncHandler } from "../middleware/asyncHandler";
import { checkJwt } from "../middleware/checkJwt";

const router = Router();

// Note: Each handler is wrapped with our error handling function.
// Get all users.
router.get("/", [checkJwt], asyncHandler(UserController.listAll));

// Get one user.
router.get("/:id", [checkJwt], asyncHandler(UserController.getOneById));

// Create a new user.
router.post("/", asyncHandler(UserController.newUser));

export default router;
