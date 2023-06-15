import React from "react";
import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";

const items = [
  {
    name: "API",
    route: "/api",
  },
  {
    name: "Documentation",
    route: "/",
  },
];

const Navbar = () => {
  return (
    <Box height="10vh" bg="brand.backgroundOne">
      <Flex paddingY={3}>
        <Box fontWeight="bold" textColor="brand.primaryTwo" marginLeft={4}>
          SECRET
        </Box>
        <Spacer />
        {items.map((item, idx) => (
          <Box key={idx} marginX={3}>
            <Text>{item.name}</Text>
          </Box>
        ))}
        <Spacer />
        <Button marginX={3} size="sm" colorScheme="blue">
          Login
        </Button>
        <Button marginX={3} size="sm" colorScheme="blue">
          Sign Up
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
