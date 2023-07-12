import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./context";
import AuthReducer from "./reducer";
import setAuthToken from "../utils/setAuthToken";
// import { useNavigate } from "react-router-dom";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  SET_PLAN,
} from "../types";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

const AuthState = (props) => {
  // let navigate = useNavigate();
  let Token = localStorage.getItem("token");
  let User = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    token: Token,
    user: User,
    isAuthenticated: Token ? true : false,
    loading: User ? true : false,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  console.log("user", state.user);

  const google_auth = async (props) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/auth/googleauth", props, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      // wait for dispatch to complete
      await new Promise((resolve) => setTimeout(resolve, 0));
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
      alert("Registration Failed");
    }
  };
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/auth/register",
        formData,
        config
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      // wait for dispatch to complete
      await new Promise((resolve) => setTimeout(resolve, 0));
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
      alert("Registration Failed");
    }
  };

  // login
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/auth/login",
        formData,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      // wait for dispatch to complete
      await new Promise((resolve) => setTimeout(resolve, 0));
      // console.log("current value", localStorage.token);
      await loadUser();
    } catch (error) {
      // console.log("In failure");
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
      alert("Login Failed");
    }
  };

  // load user
  const loadUser = async (formData) => {
    // we have to store token into global headers.
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      // console.log("settoken");
    }
    try {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URL + "/auth/getUser"
      );
      dispatch({ type: USER_LOADED, payload: res.data });
      // console.log(res);
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // handling payment
  const handlePayment = async (idx) => {
    // we have to store token into global headers.
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("hi");
      const response = await axios.put(
        process.env.REACT_APP_BASE_URL + "/payment",
        { plan: idx + 1 },
        config
      );
      console.log("hii");
      // Check if the response is a redirect
      if (response.status === 300) {
        // Redirect the user to the specified URL
        window.location.href = response.data.url;
      } else {
        // Handle other types of responses
        console.log(response.data); // Process the response data as needed
      }
      // dispatch({ type: SET_PLAN, payload: idx + 1 });
      // give alert about success/fail

      //redirect to res.data.redirect_url
      // navigate("/");
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // clear errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  // return
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        AuthState,
        loadUser,
        login,
        logout,
        handlePayment,
        google_auth,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
