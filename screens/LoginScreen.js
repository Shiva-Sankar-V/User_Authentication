import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
function LoginScreen() {
  const [isAuth, setIsAuth] = useState("");

  async function loginHandler({ email, password }) {
    setIsAuth(true);
    await login(email, password);
    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverlay message="Logging in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
