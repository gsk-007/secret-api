import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Documentation from "../components/docs/Documentation";

const DocumentationScreen = () => {
  return (
    <>
      <Navbar />
      <Documentation />
    </>
  );
};

export default DocumentationScreen;
