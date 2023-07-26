import User from "../models/User.js";
import Secret from "../models/Secret.js";

const maxPages = [3, 6, 10];

export const getSecrets = async (req, res) => {
  const params = req.query;
  const { key, pageNumber } = params;
  if (!key) return res.status(401).send({ msg: "Invalid Request" });
  const pageSize = 10;
  let page = +pageNumber || 1;
  // console.log(req.key);
  try {
    const user = await User.findOne({ apiKey: key });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Request" });
    }
    if (user.remainingApiCallsToday === 0) {
      return res.status(400).json({ msg: "Today's Limit Execeeded" });
    }

    // setting max page limit
    const currentPlan = user.plan;

    if (page > maxPages[currentPlan - 1]) {
      return res.status(200).json({ msg: "Reached End!!" });
    }

    // setting remainingApiCalls for a user
    user.remainingApiCallsToday = user.remainingApiCallsToday - 1;
    await user.save();

    const secrets = await Secret.find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return res.send({ secrets });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
