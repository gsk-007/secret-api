import React from "react";
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
  return (
    <Box height={{ lg: "90vh" }} bg="brand.backgroundOne">
      <SimpleGrid marginX={4} spacing={10} minChildWidth="320px">
        {plans.map((_, idx) => (
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
                  <ListItem>{feat}</ListItem>
                ))}
              </UnorderedList>
              <Center>
                <Text marginTop={4} fontWeight="bold">
                  Price: {_.price}
                </Text>
              </Center>
            </CardBody>
            <CardFooter>
              <Button colorScheme="teal" variant="ghost">
                Buy
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Plans;
