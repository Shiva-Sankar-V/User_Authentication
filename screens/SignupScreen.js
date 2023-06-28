import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState("");

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuth(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later."
      );
      setIsAuth(false);
    }
  }

  if (isAuth) {
    return <LoadingOverlay message="Creating a User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
