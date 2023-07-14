import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

import Context from "../context/context";
import { Box, Spinner } from "@chakra-ui/react";

const PostPaymentScreen = () => {
  const [loading, setloading] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token") || "";
  const status = queryParams.get("status");
  const context = useContext(Context);
  const { setPlan } = context;
  useEffect(() => {
    if (token) setPlan(token);
    if (!token && !status) {
      setloading(true);
    } else {
      setloading(false);
    }
  }, [loading, token, status]);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box color="black">
      <Navbar />
      {status !== "false"
        ? "Congratulations!! your payment was successfull, proceed to dashboard"
        : "We regret that you couldn't proceed!!, try again later"}
    </Box>
  );
};

export default PostPaymentScreen;
