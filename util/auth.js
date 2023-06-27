import axios from "axios";

const API_Key = "AIzaSyDchoJjyGh5qGt14TZvGK--yYj6429mU-Y";

function createUser() {
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_Key
  );
}

//API Key in the URL should be replaced with your API key which is available in the firebase project settings
