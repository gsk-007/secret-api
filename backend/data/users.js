import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync();

export const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    password: bcrypt.hashSync("pass123", salt),
  },
  {
    name: "Alice Smith",
    email: "alicesmith@example.com",
    password: bcrypt.hashSync("password456", salt),
  },
  {
    name: "Robert Johnson",
    email: "robertjohnson@example.com",
    password: bcrypt.hashSync("secure789", salt),
  },
  {
    name: "Emily Brown",
    email: "emilybrown@example.com",
    password: bcrypt.hashSync("12345pass", salt),
  },
];
