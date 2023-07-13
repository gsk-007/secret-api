import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

import Context from "../context/context";

const PostPaymentScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  console.log("hi", token);
  const context = useContext(Context);
  const { setPlan } = context;
  useEffect(() => {
    setPlan(token);
  }, []);

  return (
    <div>
      <Navbar />
      {token !== "false"
        ? "Congratulations!! your payment was successfull, wait for a moment"
        : "We regret that you couldn't proceed!!, wai for a moment"}
    </div>
  );
};

export default PostPaymentScreen;
