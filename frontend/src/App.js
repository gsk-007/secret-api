import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import DocumentationScreen from "./screens/DocumentationScreen";
import HomeScreen from "./screens/HomeScreen";
import State from "./context/state";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DashboardScreen from "./screens/DashboardScreen";
import OrderScreen from "./screens/OrderScreen";
import PostPaymentScreen from "./screens/PostPaymentScreen";

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
  {
    path: "/dashboard",
    element: <DashboardScreen />,
  },
  {
    path: "/buy/:id",
    element: <OrderScreen />,
  },
  {
    path: "/payment",
    element: <PostPaymentScreen />,
  },
]);

const App = () => {
  return (
    <State>
      <RouterProvider router={router} />
    </State>
  );
};

export default App;
