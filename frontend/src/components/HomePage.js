import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/home.jpg";

const HomePage = () => {
  return (
    <Box height="90vh" bg="brand.backgroundTwo">
      <Flex justify="space-evenly" paddingTop={10}>
        <Box marginTop={10} maxWidth="30vw">
          <Text fontSize="sm" textColor="brand.primaryTwo">
            SECRET API is a powerful and secure data retrieval interface that
            allows customers to access exclusive secret information. With this
            API, users gain privileged access to hidden data, granting them a
            competitive advantage in their endeavors.
          </Text>
          <Text fontSize="sm">
            {" "}
            Whether it's confidential market insights, undisclosed research
            findings, or undisclosed proprietary information, SECRET API
            empowers users with valuable data that remains hidden from the
            public eye.
          </Text>
        </Box>

        <Box>
          <Image boxSize="xs" src={img} />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
