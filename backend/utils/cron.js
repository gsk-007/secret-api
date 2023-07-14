// 59 23 * * *
import cron from "node-cron";
import User from "../models/User.js";

const apiCalls = [25, 75, 150];

export default cron.schedule("59 23 * * *", async () => {
  try {
    const users = await User.find();
    const updated = users.map((user) => {
      user.remainingApiCallsToday = apiCalls[user.plan - 1];
      return user.save();
    });
    await Promise.all(updated);
  } catch (err) {
    console.log(err);
  }
});

// export default cron.schedule("*/1 * * * *", () => {
//   console.log("running a task every minute");
// });
