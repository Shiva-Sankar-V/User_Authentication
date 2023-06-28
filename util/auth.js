import axios from "axios";

const API_Key = "AIzaSyDchoJjyGh5qGt14TZvGK--yYj6429mU-Y";

//Since both sign-in and sign-up has common url with slight difference and both has the post method for their own results,
// we have created a helper function for simplfying the code

async function authenticate(mode, email2, password2) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_Key}`;
  const response = await axios.post(url, {
    email: email2,
    password: password2,
    returnSecureToken: true,
  });
  //   console.log(response.data);
  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

//API Key in the URL should be replaced with your API key which is available in the firebase project settings
