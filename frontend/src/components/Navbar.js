import { useContext } from "react";
import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthContext from "../context/context";
import { useNavigate } from "react-router-dom";

const items = [
  {
    name: "API",
    route: "/api",
  },
  {
    name: "Documentation",
    route: "/docs",
  },
];

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;
  const navigate = useNavigate();
  if (isAuthenticated === false) {
    console.log(isAuthenticated, "isauth");
    navigate("/login");
  }
  return (
    <Box height="10vh" bg="brand.backgroundOne">
      <Flex paddingY={3}>
        <Link to="/">
          <Box fontWeight="bold" textColor="brand.primaryTwo" marginLeft={4}>
            SECRET
          </Box>
        </Link>
        <Spacer />
        {items.map((item, idx) => (
          <Box textColor="brand.primaryOne" key={idx} marginX={3}>
            <Link to={item.route}>
              <Text>{item.name}</Text>
            </Link>
          </Box>
        ))}
        <Spacer />
        {!isAuthenticated ? (
          <Box>
            <Link to="/login">
              <Button marginX={3} size="sm" colorScheme="teal">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button marginX={3} size="sm" colorScheme="teal">
                Register
              </Button>
            </Link>
          </Box>
        ) : (
          <Box>
            <Button onClick={logout} marginX={3} size="sm" colorScheme="teal">
              Logout
            </Button>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
