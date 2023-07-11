import React from "react";
import { Center, Box, Spinner } from "@chakra-ui/react";
const Loader = () => {
  return (
    <Box>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </Box>
  );
};

export default Loader;
