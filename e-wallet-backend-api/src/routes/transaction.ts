import { Router } from "express";
import TransactionController from "../controllers/TransactionController";
import { asyncHandler } from "../middleware/asyncHandler";
import { checkJwt } from "../middleware/checkJwt";

const router = Router();

// Note: Each handler is wrapped with our error handling function.
// Get all users.
router.get(
  "/:userId/transactions",
  [checkJwt],
  asyncHandler(TransactionController.getAllById)
);

// Create a new transaction.
router.post("/", asyncHandler(TransactionController.newTransaction));

// Delete one user.
router.delete(
  "/:id",
  [checkJwt],
  asyncHandler(TransactionController.deleteTransaction)
);

export default router;
