import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { plans } from "../components/Plans";
import { useParams } from "react-router-dom";
import OrderDetails from "../components/OrderDetails";
import Context from "../context/context";

const OrderScreen = () => {
  const { id } = useParams();

  const context = useContext(Context);
  const { handlePayment } = context;

  // isdisable to disable buy buttons when some buy button is clicks
  const [isDisabled, setisDisabled] = useState(false);
  return (
    <Box>
      <Navbar />
      <Box paddingTop={10} minHeight="90vh" bg="brand.backgroundTwo">
        <Accordion maxW="80vw" marginX="auto" defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Order Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <OrderDetails name={plans[id].name} price={plans[id].price} />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Select Payment Method
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <Button
            colorScheme="teal"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              setisDisabled(true);
              handlePayment(id);
              setisDisabled(false);
            }}
            isDisabled={isDisabled}
          >
            Pay now
          </Button>
        </Accordion>
      </Box>
    </Box>
  );
};

export default OrderScreen;
