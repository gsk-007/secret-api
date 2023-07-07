import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AuthContext from "../context/context";
import PlanDetails from "../components/PlanDetails";

const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  console.log(user);
  return (
    <Box>
      <Navbar />
      <Box height="90vh" bg="brand.backgroundTwo">
        <PlanDetails user={user} />
      </Box>
    </Box>
  );
};

export default DashboardScreen;
