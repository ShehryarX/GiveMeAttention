import React from "react";
import { Text } from "react-native";
import { Button } from "../../common/Button";
import UserStore from "../../stores/UserStore";

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Button label="Sign Out" onPress={() => UserStore.signOut()} />
        <Text>Signed in!</Text>
      </>
    );
  }
}
