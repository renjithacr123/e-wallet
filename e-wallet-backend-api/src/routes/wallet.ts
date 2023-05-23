import { Router } from "express";
import WalletController from "../controllers/WalletController";
import { asyncHandler } from "../middleware/asyncHandler";
import { checkJwt } from "../middleware/checkJwt";

const router = Router();

// Get one user.
router.get(
  "/wallet/balance/:userId",
  [checkJwt],
  asyncHandler(WalletController.getOneById)
);

export default router;
