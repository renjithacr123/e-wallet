import { NotFoundError } from "../exceptions/notFoundError";

// Define the code interface for user objects.
export interface IWallet {
  userId: string;
  balance: number;
}

// NOTE: Validation errors are handled directly within these functions.

// Generate a copy of the users without their passwords.
const generateSafeCopy = (transaction: IWallet): IWallet => {
  let _transaction = { ...transaction };
  return _transaction;
};
// Let's initialize our example API with some transaction records.
let balances: { [userId: string]: IWallet } = {
  "0": {
    userId: "2",
    balance: 100,
  },
  "1": {
    userId: "1",
    balance: 1000,
  },
};
// Recover a transaction if present.
export const getBalance = (userId: string): IWallet => {
  if (!(userId in balances))
    throw new NotFoundError(`User with ID ${userId} not found`);
  return generateSafeCopy(balances[userId]);
};
