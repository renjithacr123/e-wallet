import React from "react";
import { AccountProfile } from "./components/AccountProfile";
import { TransactionHistory } from "./components/TransactionHistory";
import { AccountContainer } from "./Home.styles";
//import getWalletBalance from "../../services/wallet.service";

export const Home = (props) => {
  const { user } = props;
  //const balance = getWalletBalance();
  return (
    <AccountContainer>
      <AccountProfile balance={user.balance} fullname={user.fullname} />
      <hr />
      <TransactionHistory user={user} />
    </AccountContainer>
  );
};
