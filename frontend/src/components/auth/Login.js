import React, { useContext, useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
} from "@chakra-ui/react";
import GoogleAuth from "./GoogleAuth";
import AuthContext from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { email, password } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all the fields.");
    } else {
      setLoading(true);
      await login({ email, password });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error === "Invalid Credentials") {
      alert(error);
      clearErrors();
    }
    if (isAuthenticated) {
      setLoading(false);
      navigate("/dashboard");
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, loading]);
  return (
    <Box minH={"100vh"} bg="brand.backgroundOne">
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading color="brand.primaryOne" fontSize={"4xl"}>
              Sign in to your account
            </Heading>
          </Stack>
          <Box rounded={"lg"} bg="brand.backgroundTwo" boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </FormControl>
              <Stack spacing={4}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  isLoading={loading}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
                <Stack align={"center"}>
                  <GoogleAuth />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
