import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuth, setIsAuth] = useState("");

  async function signupHandler({ email, password }) {
    setIsAuth(true);
    await createUser(email, password);
    setIsAuth(false);
  }

  if (isAuth) {
    return <LoadingOverlay message="Creating a User..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
