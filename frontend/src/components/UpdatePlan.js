import React, { useContext, useEffect } from "react";
import Plans from "./Plans";
import {
  Box,
  Heading,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Spinner,
} from "@chakra-ui/react";
import AuthContext from "../context/context";

const UpdatePlan = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;

  useEffect(() => {
    // if (!user) {
    //   return <Spinner />;
    // }
  }, [user]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <Box marginTop={10}>
      <Box marginX="auto" maxW="90vw">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton bg="brand.primaryTwo">
                <Box as="span" flex="1" textAlign="left">
                  Upgrade Plan
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Plans />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default UpdatePlan;
