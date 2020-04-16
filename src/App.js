import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { RegisterPage } from "./screens/register/RegisterPage";
import UserStore from "./stores/UserStore";
import "./config/FirebaseConfig";
import { HomePage } from "./screens/home/HomePage";

@observer
class App extends React.Component {
  render() {
    const { isUserSignedIn } = UserStore;

    return (
      <View style={styles.container}>
        {isUserSignedIn ? <HomePage /> : <RegisterPage />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
