import { Box, Heading, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Box color="black">
      <Heading>Page Not Found</Heading>
      <Link to="/">Go Home</Link>
      {/* <Text>{error.message}</Text> */}
    </Box>
  );
};

export default ErrorPage;
