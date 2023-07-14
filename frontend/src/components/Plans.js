import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Context from "../context/context";

export const plans = [
  {
    name: "Budget Buster",
    type: "Free",
    features: [
      "10 request per day",
      "Standard Support",
      "Public Documentation",
      "Restricted Features",
      "Limited Rate Limits",
    ],
    price: "₹0.0",
    route: "/login",
    btnText: "Buy",
  },
  {
    name: "Silver Spoon",
    type: "Paid",
    features: [
      "Higher Usage Limit",
      "100 request per day",
      "Priority Support",
      "Advanced Documentation",
      "Expanded Features",
    ],
    price: "₹70",
    route: "/buy/1",
    btnText: "Buy",
  },
  {
    name: "Gold Rush",
    type: "Paid",
    features: [
      "Unlimited Usage",
      "1000 requrest per day",
      "Comprehensive Documentation",
      "Exclusive Features",
      "No Rate Limits",
    ],
    price: "₹700",
    route: "/buy/2",
    btnText: "Buy",
  },
];
const Plans = () => {
  const context = useContext(Context);
  const { user } = context;
  return (
    <Box height={{ lg: "110vh" }} bg="brand.backgroundOne">
      <Box paddingTop={3}>
        <Center>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <Heading fontSize="5xl">OUR PLANS</Heading>
          </AnimationOnScroll>
        </Center>
      </Box>
      <SimpleGrid marginX={4} spacing={10} minChildWidth="320px">
        {plans.map((_, idx) => (
          <AnimationOnScroll animateIn="animate__bounceIn" key={idx}>
            <Card
              maxHeight="500px"
              key={idx}
              width="360px"
              marginY={6}
              align="center"
              color="brand.primaryOne"
              bg="brand.backgroundTwo"
            >
              <CardHeader>
                <Heading color="brand.primaryTwo" size="lg">
                  {_.name}
                </Heading>
                <Center>
                  <Text marginTop={2} fontWeight="bold">
                    Type: {_.type}
                  </Text>
                </Center>
              </CardHeader>
              <CardBody>
                <UnorderedList>
                  {_.features.map((feat) => (
                    <ListItem key={feat}>{feat}</ListItem>
                  ))}
                </UnorderedList>
                <Center>
                  <Text marginTop={4} fontWeight="bold">
                    Price: {_.price}
                  </Text>
                </Center>
              </CardBody>
              <CardFooter>
                <Link to={!user ? "/login" : _.route}>
                  <Button
                    colorScheme="teal"
                    variant="ghost"
                    isDisabled={user !== null && idx + 1 === user.plan}
                  >
                    {_.btnText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </AnimationOnScroll>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Plans;
