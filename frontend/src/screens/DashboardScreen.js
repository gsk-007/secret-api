import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AuthContext from "../context/context";
import { useNavigate } from "react-router-dom";

const DashboardScreen = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const navigate = useNavigate();

  if (!isAuthenticated) navigate("/login");
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default DashboardScreen;
