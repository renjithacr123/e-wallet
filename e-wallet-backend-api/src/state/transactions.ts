import { NotFoundError } from "../exceptions/notFoundError";

// Define the code interface for user objects.
export interface ITransaction {
  id: string;
  userId: string;
  currency: string;
  paymentStatus: string;
  paymentGateway: string;
  amount: number;
}

// NOTE: Validation errors are handled directly within these functions.

// Generate a copy of the transactions
const generateSafeCopy = (transaction: ITransaction): ITransaction => {
  let _transaction = { ...transaction };
  return _transaction;
};
// Let's initialize our example API with some transaction records.
let transactions: { [id: string]: ITransaction } = {
  "1": {
    id: "0",
    userId: "1",
    currency: "EUR",
    amount: 100,
    paymentStatus: "COMPLETE",
    paymentGateway: "gatewayName1",
  },
  2: {
    id: "2",
    userId: "1",
    currency: "EUR",
    amount: 200,
    paymentStatus: "PENDING",
    paymentGateway: "gatewayName2",
  },
};

let nextTransactionId = Object.keys(transactions).length;

// find a transaction if present.
export const getTransaction = (id: string): ITransaction[] => {
  if (!(id in transactions))
    throw new NotFoundError(`User with ID ${id} not found`);
  return Object.values(transactions).map((elem) => generateSafeCopy(elem));
};

export const createTransaction = async (
  userId: string,
  currency: string,
  amount: number,
  paymentStatus: string,
  paymentGateway: string
): Promise<ITransaction> => {
  const id: string = nextTransactionId.toString();
  // Create the transaction.
  transactions[id] = {
    userId,
    currency,
    amount,
    paymentStatus,
    paymentGateway,
    id,
  };
  return generateSafeCopy(transactions[id]);
};

export const deleteTransaction = (id: string) => {
  if (!(id in transactions))
    throw new NotFoundError(`User with ID ${id} not found`);
  delete transactions[id];
};
