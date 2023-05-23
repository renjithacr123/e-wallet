import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../exceptions/forbiddenError";
import { CustomRequest } from "../middleware/checkJwt";
import { getBalance } from "../state/wallet";

class WalletController {
  static getOneById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Get the ID from the URL.
    const id: string = req.params.userId;

    const user = getBalance(id);
    res.status(200).type("json").send(user);
  };
}

export default WalletController;
