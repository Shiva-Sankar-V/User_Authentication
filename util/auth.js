import axios from "axios";

function createUser() {
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDchoJjyGh5qGt14TZvGK--yYj6429mU-Y"
  );
}

//API Key in the URL should be replaced with your API key which is available in the firebase project settings
