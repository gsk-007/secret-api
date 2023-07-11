import React, { useContext, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AuthContext from "../context/context";
import PlanDetails from "../components/PlanDetails";
import UpdatePlan from "../components/UpdatePlan";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const navigate = useNavigate();
  console.log(isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [isAuthenticated]);
  return isAuthenticated ? (
    <Box>
      <Navbar />
      <Box minH="90vh" bg="brand.backgroundTwo">
        <PlanDetails user={user} />
        <UpdatePlan />
      </Box>
    </Box>
  ) : (
    <Loader />
  );
};

export default DashboardScreen;
