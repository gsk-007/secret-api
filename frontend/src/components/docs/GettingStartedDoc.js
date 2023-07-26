import React from "react";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  Divider,
  useClipboard,
} from "@chakra-ui/react";

const GettingStartedDoc = () => {
  const { onCopy, hasCopied } = useClipboard(
    "https://secret-api-backend.onrender.com/"
  );
  return (
    <Box width="80%">
      <Heading> Secret API - Quote Service</Heading>
      <Text>
        Welcome to Secret API - Quote Service! This API provides a collection of
        quotes to inspire, motivate, and enlighten users. Whether you're
        building a website, mobile application, or any other project that needs
        a touch of wisdom, our API has you covered.
      </Text>
      <Divider marginY={5} />
      <Box>
        <Heading> API Key</Heading>
        <Text>
          To access Secret API - Quote Service, you will need an API key. Follow
          the steps below to obtain your API key: Sign up for an account on our
          website at www.secretapi.com. Once you've created your account,
          navigate to the API section. Generate an API key by clicking on the
          "Generate Key" button. Copy the API key provided.
        </Text>
      </Box>
      <Divider marginY={5} />
      <Box>
        <Heading> Base URL</Heading>
        <Text>The base URL for Secret API - Quote Service is:</Text>
        <Card marginTop={2}>
          <Badge
            bg="teal"
            color="brand.primaryOne"
            align="right"
            cursor="pointer"
            paddingY={2}
            onClick={onCopy}
            paddingRight={3}
          >
            {hasCopied ? "Copied!" : "Copy"}
          </Badge>
          <CardBody>
            <Text>https://secret-api-backend.onrender.com/</Text>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
};

export default GettingStartedDoc;
