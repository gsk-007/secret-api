import React from "react";
import { Box, Text } from "@chakra-ui/react";

const OrderDetails = ({ name, price }) => {
  return (
    <Box>
      <Text>Plan Name: {name}</Text>
      <Text>Price: {price}</Text>
    </Box>
  );
};

export default OrderDetails;
