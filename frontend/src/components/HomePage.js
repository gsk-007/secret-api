import React from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import img from "../assets/home.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HomePage = () => {
  return (
    <Box bg="brand.backgroundTwo">
      <Box height="90vh">
        <Flex justify="space-evenly" paddingY={10}>
          <Box marginY="auto" maxWidth="40vw">
            <Heading fontSize="6xl" textColor="brand.primaryTwo">
              SECRET-API
            </Heading>
            <Center>
              <Text marginTop={4} fontSize="md">
                The Next Generation API For Your Projects
              </Text>
            </Center>
          </Box>
          <Box>
            <Image boxSize="xs" src={img} />
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Box minH="70vh" bg="brand.backgroundOne">
        <Center>
          <AnimationOnScroll animateIn="animate__bounce">
            <Heading marginTop={8} fontSize="5xl">
              Why Secret-API?
            </Heading>
          </AnimationOnScroll>
        </Center>
        <Center>
          <Text marginY={8} fontSize="lg" maxW="60vw">
            Secret API is a powerful API that offers a vast collection of
            motivational quotes to inspire and uplift users. With this API,
            developers can easily integrate motivational quotes into their
            applications, websites, or services, adding a touch of positivity
            and encouragement. Whether you're building a personal development
            app, a productivity tool, or any other project that aims to motivate
            and inspire users, Secret API has you covered with its extensive
            selection of motivational quotes. Let Secret API bring the power of
            motivation to your application and help your users stay motivated on
            their journey to success.
          </Text>
        </Center>
      </Box>
      <Divider />
    </Box>
  );
};

export default HomePage;
