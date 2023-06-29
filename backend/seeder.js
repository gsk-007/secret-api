import { users } from "./data/users";
import { secrets } from "./data/secrets";
import User from "./models/User";
import Secret from "./models/Secret";

import connectDB from "./config/db";

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Secret.deleteMany();

    await User.insertMany(users);
    await User.insertMany(secrets);
    console.log("Data Imported");
  } catch (error) {
    console.log(error);
  }
};

importData();
