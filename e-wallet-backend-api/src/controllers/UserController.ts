import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../exceptions/forbiddenError";
import { CustomRequest } from "../middleware/checkJwt";
import { getAllUsers, getUser, createUser } from "../state/users";

class UserController {
  static listAll = async (req: Request, res: Response, next: NextFunction) => {
    // Retrieve all users.
    const users = getAllUsers();
    // Return the user information.
    res.status(200).type("json").send(users);
  };

  static getOneById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Get the ID from the URL.
    const id: string = req.params.id;

    // Validate permissions.
    if (
      ((req as CustomRequest).token.payload.role === req.params.id) !==
      (req as CustomRequest).token.payload.userId
    ) {
      throw new ForbiddenError("Not enough permissions");
    }

    // Get the user with the requested ID.
    const user = getUser(id);

    // NOTE: We will only get here if we found a user with the requested ID.
    res.status(200).type("json").send(user);
  };

  static newUser = async (req: Request, res: Response, next: NextFunction) => {
    // Get the user name and password.
    let { username, password } = req.body;
    // We can only create regular users through this function.
    const user = await createUser(username, password);

    // NOTE: We will only get here if all new user information
    // is valid and the user was created.
    // Send an HTTP "Created" response.
    res.status(201).type("json").send(user);
  };
}

export default UserController;
