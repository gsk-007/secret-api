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

export default function Register(props) {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { name, email, password } = user;
  const navigate = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Register Submit.");
    await register({
      name,
      email,
      password,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
      navigate("/dashboard");
    }
    if (error === "User already exists") {
      alert(error);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history, loading]);

  return (
    <Box bg="brand.backgroundOne">
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up to Secret API</Heading>
          </Stack>
          <Box rounded={"lg"} bg="brand.backgroundTwo" boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </FormControl>
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
                  onClick={handleSubmit}
                  isLoading={loading}
                >
                  Sign up
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
