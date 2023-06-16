import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    console.log("hiiiii", token, token.toString());
    axios.defaults.headers.common["x-auth-token"] = token.toString();
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
