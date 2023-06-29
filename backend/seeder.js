import { users } from "./data/users.js";
import { secrets } from "./data/secrets.js";
import User from "./models/User.js";
import Secret from "./models/Secret.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Secret.deleteMany();

    await User.insertMany(users);
    await Secret.insertMany(secrets);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
