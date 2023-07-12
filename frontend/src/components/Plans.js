import React, { useState, useContext } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
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
  useStatStyles,
} from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Context from "../context/context";

const plans = [
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
  },
];

const Plans = () => {
  const context = useContext(Context);
  const { handlePayment, user } = context;

  // isdisable to disable buy buttons when some buy button is clicks
  // const [isDisabled, setisDisabled] = useState(false);

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
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  onClick={(e) => {
                    // setisDisabled(true);
                    e.stopPropagation();
                    handlePayment(idx);
                    // setisDisabled(false);
                  }}
                  // isDisabled={isDisabled}
                >
                  {user !== null
                    ? idx + 1 > user.plan
                      ? "Get now"
                      : idx + 1 === user.plan
                      ? "Current"
                      : "Switch to this"
                    : "Buy"}
                </Button>
              </CardFooter>
            </Card>
          </AnimationOnScroll>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Plans;
