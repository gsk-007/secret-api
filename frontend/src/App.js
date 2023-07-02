import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import DocumentationScreen from "./screens/DocumentationScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/docs",
    element: <DocumentationScreen />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
