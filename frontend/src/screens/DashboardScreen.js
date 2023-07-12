import React, { useContext, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AuthContext from "../context/context";
import PlanDetails from "../components/PlanDetails";
import UpdatePlan from "../components/UpdatePlan";
import { useNavigate } from "react-router-dom";

const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("not authenticated");
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <Box>
      <Navbar />
      <Box minH="90vh" bg="brand.backgroundTwo">
        <PlanDetails user={user} />
        <UpdatePlan />
      </Box>
    </Box>
  );
};

export default DashboardScreen;
