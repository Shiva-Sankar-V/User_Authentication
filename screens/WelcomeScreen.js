import axios from "axios";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  const [fetchMsg, setFetchMsg] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://expensesummary-9fbaf-default-rtdb.firebaseio.com/message.json"
      )
      .then((response) => {
        // console.log(response.data);
        setFetchMsg(response.data);
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMsg}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
