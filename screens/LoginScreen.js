import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
function LoginScreen() {
  const [isAuth, setIsAuth] = useState("");
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuth(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Autentication failed!",
        "Could not log in. Please check your credentials or try again later!"
      );
    }

    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
