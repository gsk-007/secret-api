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
} from "../types";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

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
  // console.log("user", state.user);

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
  const handlePayment = async (id) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // we have to store token into global headers.
    id = Number(id) + 1;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // console.log("handling payment, plan: ", id);
      axios
        .post(
          process.env.REACT_APP_BASE_URL + "/payment",
          { plan: id, email: state.user.email, id: state.user._id },
          config
        )
        .then((response) => {
          // if (response.status === 303) {
          // const redirectedUrl = response.headers.location;
          // Handle the redirected URL as needed
          // console.log("Redirected to:", response.data.url);
          window.location.href = response.data.url;
        })
        .catch((err) => {
          // Handle any errors
          console.error(err);
        });
    } catch (error) {
      // console.log(error.message);
      dispatch({ type: AUTH_ERROR });
    }
  };

  // setting up plan
  const setPlan = async (token) => {
    if (token === "false") {
      window.location.href = process.env.REACT_APP_MAIN_URL;
    }

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // console.log("setting the plan");
      const res = await axios.put(
        process.env.REACT_APP_BASE_URL + "/payment/setPlan",
        { token, email: state.user.email, id: state.user._id },
        config
      );
      await loadUser();
      window.location.href = process.env.REACT_APP_MAIN_URL;
    } catch (error) {
      console.log(error.message);
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
        setPlan,
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
