import React from "react";
import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "API",
    route: "/api",
  },
  {
    name: "Documentation",
    route: "/docs",
  },
];

const Navbar = () => {
  return (
    <Box height="10vh" bg="brand.backgroundOne">
      <Flex paddingY={3}>
        <Link to="/">
          <Box fontWeight="bold" textColor="brand.primaryTwo" marginLeft={4}>
            SECRET
          </Box>
        </Link>
        <Spacer />
        {items.map((item, idx) => (
          <Box key={idx} marginX={3}>
            <Link to={item.route}>
              <Text>{item.name}</Text>
            </Link>
          </Box>
        ))}
        <Spacer />
        <Link to="/login">
          <Button marginX={3} size="sm" colorScheme="teal">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button marginX={3} size="sm" colorScheme="teal">
            Register
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
