import React from "react";
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
} from "@chakra-ui/react";

const UpdatePlan = () => {
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
