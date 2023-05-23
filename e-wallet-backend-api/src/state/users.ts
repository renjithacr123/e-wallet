import bcrypt from "bcrypt";
import { NotFoundError } from "../exceptions/notFoundError";
import { ClientError } from "../exceptions/clientError";

// Define the code interface for user objects.
export interface IUser {
  id: string;
  username: string;
  // The password is marked as optional to allow us to return this structure
  // without a password value. We'll validate that it is not empty when creating a user.
  password?: string;
}

// Let's initialize our example API with some user records.
// "await require('bcrypt').hash('PASSWORD_TO_HASH', 12)"
let users: { [id: string]: IUser } = {
  "0": {
    id: "0",
    username: "testuser1",
    // Plaintext password: testuser1_password
    password: "$2b$12$ov6s318JKzBIkMdSMvHKdeTMHSYMqYxCI86xSHL9Q1gyUpwd66Q2e",
  },
};

let nextUserId = Object.keys(users).length;

// NOTE: Validation errors are handled directly within these functions.

// Generate a copy of the users without their passwords.
const generateSafeCopy = (user: IUser): IUser => {
  let _user = { ...user };
  delete _user.password;
  return _user;
};

// Recover a user if present.
export const getUser = (id: string): IUser => {
  if (!(id in users)) throw new NotFoundError(`User with ID ${id} not found`);
  return generateSafeCopy(users[id]);
};

// Recover a user based on username if present, using the username as the query.
export const getUserByUsername = (username: string): IUser | undefined => {
  const possibleUsers = Object.values(users).filter(
    (user) => user.username === username
  );
  // Undefined if no user exists with that username.
  if (possibleUsers.length == 0) return undefined;
  return generateSafeCopy(possibleUsers[0]);
};

export const getAllUsers = (): IUser[] => {
  return Object.values(users).map((elem) => generateSafeCopy(elem));
};

export const createUser = async (
  username: string,
  password: string
): Promise<IUser> => {
  username = username.trim();
  password = password.trim();

  // Reader: Add checks according to your custom use case.
  if (username.length === 0) throw new ClientError("Invalid username");
  else if (password.length === 0) throw new ClientError("Invalid password");
  // Check for duplicates.
  if (getUserByUsername(username) != undefined)
    throw new ClientError("Username is taken");

  // Generate a user id.
  const id: string = nextUserId.toString();
  nextUserId++;
  // Create the user.
  users[id] = {
    username,
    password: await bcrypt.hash(password, 12),
    id,
  };
  return generateSafeCopy(users[id]);
};

export const updateUser = (id: string, username: string): IUser => {
  // Check that user exists.
  if (!(id in users)) throw new NotFoundError(`User with ID ${id} not found`);

  // Reader: Add checks according to your custom use case.
  if (username.trim().length === 0) throw new ClientError("Invalid username");
  username = username.trim();
  const userIdWithUsername = getUserByUsername(username)?.id;
  if (userIdWithUsername !== undefined && userIdWithUsername !== id)
    throw new ClientError("Username is taken");

  // Apply the changes.
  users[id].username = username;
  return generateSafeCopy(users[id]);
};

export const deleteUser = (id: string) => {
  if (!(id in users)) throw new NotFoundError(`User with ID ${id} not found`);
  delete users[id];
};

export const isPasswordCorrect = async (
  id: string,
  password: string
): Promise<boolean> => {
  if (!(id in users)) throw new NotFoundError(`User with ID ${id} not found`);
  return await bcrypt.compare(password, users[id].password!);
};
