import {
  Box,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        <Text>© 2023 BlahBlah. All rights reserved</Text>
        <Center>
          <Heading fontSize="md">Disclaimer</Heading>
        </Center>
        <Center>
          <Text>This is a fun website</Text>
        </Center>
      </Container>
    </Box>
  );
};
export default Footer;
