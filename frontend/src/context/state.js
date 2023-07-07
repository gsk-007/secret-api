import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./context";
import AuthReducer from "./reducer";
import setAuthToken from "../utils/setAuthToken";
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

axios.defaults.baseURL = "http://localhost:5000";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

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
      const res = await axios.post("/auth/register", formData, config);
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
      const res = await axios.post("/auth/login", formData, config);
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
      const res = await axios.get("/auth/getUser");
      dispatch({ type: USER_LOADED, payload: res.data });
      // console.log(res);
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
        google_auth,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
