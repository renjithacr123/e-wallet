import { useState } from "react";
import { Notification } from "../../components/notification";
import { getDateToday } from "../../utils";
import {
  TransferContainer,
  FormBody,
  FormHeading,
  FormLabel,
  FormInput,
  FormButton,
  Line,
} from "./Transfer.styles";

export const Transfer = (props) => {
  const { isClient, client } = props;
  const [sender, setSender] = useState(isClient ? client : { balance: 0 });
  const [receiver, setReceiver] = useState({ balance: 0 });
  const [notif, setNotif] = useState({
    message: "",
    style: "",
  });

  const transferFund = (event) => {
    event.preventDefault();
    const amount = parseFloat(
      event.target.elements.amount.value.replace(/,/g, "")
    );

    const messages = event.target.message.value;

    if (amount <= 0) return false;

    const users = JSON.parse(localStorage.getItem("users"));

    if (sender.number !== 0 && receiver.number !== 0 && receiver.number) {
      // deduct from sender
      let senderSuccess = false;
      users.forEach((user) => {
        if (user.number === sender.number) {
          if (user.balance - amount >= 0) {
            user.balance -= amount;

            // adds transaction information to the beginning of the transaction array
            user.transactions.unshift({
              title: `Fund transfer to ${receiver.fullname} #${receiver.number}`,
              amount: amount,
              type: "debit",
              message: messages,
              date: getDateToday(),
            });

            setSender(user);
            senderSuccess = true;
          }
        }
      });

      // add to receiver
      if (senderSuccess) {
        users.forEach((user) => {
          if (user.number === receiver.number) {
            user.balance += amount;

            // adds transaction information to the beginning of the transaction array
            user.transactions.unshift({
              title: `Fund transfer from ${sender.fullname} #${receiver.number}`,
              amount: amount,
              type: "credit",
              message: messages,
              date: getDateToday(),
            });

            setReceiver(user);
          }
        });

        setNotif({ message: "Successful transfer.", style: "success" });
        props.setUsers(users);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        setNotif({ message: "Transfer failed.", style: "danger" });
      }
    } else {
      setNotif({
        message: "Incomplete information. Missing sender or receiver.",
        style: "danger",
      });
    }
  };

  return (
    <TransferContainer>
      <FormBody onSubmit={transferFund}>
        <Notification message={notif.message} style={notif.style} />
        <FormHeading>Transfer Form</FormHeading>
        <FormLabel>From</FormLabel>
        <FormInput type="text" name="sender" />
        <FormLabel>Current balance</FormLabel>
        <FormInput type="currency" name="currency" />

        <Line />

        <FormHeading>Receiver</FormHeading>
        <FormLabel>To</FormLabel>
        <FormInput type="text" name="sender" />
        <FormLabel>Amount</FormLabel>
        <FormInput type="currency" name="currency" />
        <FormButton type="submit" value="Transfer Fund" />
      </FormBody>
    </TransferContainer>
  );
};
