import { Router } from "express";
import auth from "./auth";
import user from "./user";
import transaction from "./transaction";
import wallet from "./wallet";

const routes = Router();

routes.use("/auth", auth);
// All user operations will be available under the "users" route prefix.
routes.use("/users", user);
// All transactions operations will be available under the "users" route prefix.
routes.use("/transactions", transaction);
// All wallets operations will be available under the "users" route prefix.
routes.use("/wallets", wallet);

// Allow our router to be used outside of this file.
export default routes;
