import React from "react";
import { formatNumber } from "../../../utils";
import {
  TransactionHistoryTable,
  TransactionHistoryItem,
  HomeHeading,
} from "../Home.styles";

// import getTransaction from "../../../services/transaction.service";

export const TransactionHistory = (props) => {
  const { user } = props;

  //From API
  //const userTransactions = getTransaction();

  const transactions = user.transactions.map((transaction, index) => {
    const className = index % 2 === 0 ? "even" : "odd";
    return (
      <TransactionHistoryItem className={`${className}`}>
        <div>{transaction.date}</div>
        <div>{transaction.title}</div>
        <div>
          {transaction.type === "debit"
            ? formatNumber(transaction.amount * -1)
            : formatNumber(transaction.amount)}
        </div>
        <div>{transaction.message}</div>
      </TransactionHistoryItem>
    );
  });

  return (
    <TransactionHistoryTable>
      <HomeHeading>Transactions</HomeHeading>
      {transactions}
    </TransactionHistoryTable>
  );
};
