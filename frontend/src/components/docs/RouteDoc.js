import {
  Badge,
  Box,
  Card,
  Heading,
  Text,
  useClipboard,
  CardBody,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const RouteDoc = () => {
  const { onCopy, hasCopied } = useClipboard(
    "https://secret-api-backend.onrender.com/"
  );
  const BASE_URL = "BASE_URL";
  return (
    <Box width="80%">
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
      <Divider marginY={5} />
      <Box>
        <Box>
          <Heading size="lg">How to make api request?</Heading>
          <Card marginTop={2}>
            <CardBody>
              <Heading size="md">Using API Key</Heading>
              <Text color="brand.primaryTwo" marginTop={2}>
                <Text display="inline" fontWeight="bold">
                  {BASE_URL}/api/secrets
                </Text>
                ?key=&#123;yourkey&#125;
              </Text>
            </CardBody>
          </Card>
        </Box>
        <Box marginTop={4}>
          <Card>
            <CardBody>
              <Heading size="md">For Pagination</Heading>
              <Text color="brand.primaryTwo" marginTop={2}>
                <Text display="inline" fontWeight="bold">
                  {BASE_URL}/api/secrets
                </Text>
                ?key=&#123;yourkey&#125;&pageNumber=&#123;pageNumber&#125;
              </Text>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default RouteDoc;
