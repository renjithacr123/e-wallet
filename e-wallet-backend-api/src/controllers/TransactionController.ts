import { NextFunction, Request, Response } from "express";
import {
  getTransaction,
  deleteTransaction,
  createTransaction,
} from "../state/transactions";

class TransactionController {
  static getAllById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Get the ID from the URL.
    const id: string = req.params.userId;

    // Get the transactions with the requested user ID.
    const user = getTransaction(id);

    // NOTE: We will only get here if we found a transaction for this user with the requested ID.
    res.status(200).type("json").send(user);
  };

  static newTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Get the user name and password.
    let { userId, currency, amount, paymentStatus, paymentGateway } = req.body;
    // We can only create regular users through this function.
    const user = await createTransaction(
      userId,
      currency,
      amount,
      paymentStatus,
      paymentGateway
    );

    // NOTE: We will only get here if all new user information
    // is valid and the user was created.
    // Send an HTTP "Created" response.
    res.status(201).type("json").send(user);
  };

  static deleteTransaction = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Get the ID from the URL.
    const id = req.params.id;
    deleteTransaction(id);
    res.status(204).type("json").send();
  };
}

export default TransactionController;
