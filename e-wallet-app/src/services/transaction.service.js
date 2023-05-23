import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/";

const getTransactions = () => {
  return axios.get(API_URL + "transactions", { headers: authHeader() });
};

const TransactionService = { getTransactions };

export default TransactionService;
