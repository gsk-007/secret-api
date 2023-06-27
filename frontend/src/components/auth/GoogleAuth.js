import { GoogleLogin } from "@react-oauth/google";
import AuthContext from "../../context/context";
import { useContext } from "react";
import jwt_decode from "jwt-decode";

function GoogleAuth() {
  const authContext = useContext(AuthContext);

  const { google_auth } = authContext;

  const handleSuccess = async (res) => {
    let info = jwt_decode(res.credential);
    console.log(info);

    const { given_name, family_name, email } = info;
    // const { name, email } = info;
    google_auth({ name: given_name + " " + family_name, email });
  };

  const handleError = () => {
    console.log("Login Failed");
  };
  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} />;
}
export default GoogleAuth;
