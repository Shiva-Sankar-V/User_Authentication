import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState("");

  async function signupHandler({ email, password }) {
    setIsAuth(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later."
      );
    }

    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverlay message="Creating a User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
