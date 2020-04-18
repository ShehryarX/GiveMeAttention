import React from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Button } from "../../common/Button";
import { FormTextInput } from "../../common/FormTextInput";
import { HomeStore } from "./state";
import { UserStore } from "../../stores/UserStore";
import { COLOURS } from "../../config/colors";

export class HomePage extends React.Component {
  state = new HomeStore();
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.needAttention}>give me attention!</Text>
          <Image source={{
            uri: "https://placekitten.com/400/400"
          }} style={[styles.dp, styles.dpLarge]}/>
          <Text style={styles.username}>yousername</Text>
        </View>
        <View style={styles.header}>
          <View style={styles.headerButtonContainer}>
            <Button 
              style={styles.headerButton}
              label="Add BFFs" 
              onPress={() => console.log('add friend')} 
            />
          </View>
          <View style={styles.headerButtonContainer}>
            <Button 
              style={styles.headerButton}
              label="Send All"
              lightButton={true}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLOURS.DODGER_BLUE
  },
  banner: {
    height: "47.5%",
    borderBottomLeftRadius: Dimensions.get('window').width,
    borderBottomRightRadius: Dimensions.get('window').width,
    backgroundColor: COLOURS.WHITE,
    width: "170%",
    alignItems: "center"
  },
  needAttention: {
    color: COLOURS.DODGER_BLUE,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
    letterSpacing: 2,
    marginTop: 80
  },
  dp: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4,
    borderRadius: Dimensions.get('window').width * 0.2
  },
  dpLarge: {
    marginTop: 30
  },
  username: {
    color: COLOURS.DODGER_BLUE,
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 25,
    letterSpacing: 1
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  },
  headerButtonContainer: {
    width: "40%",
    marginHorizontal: 10,
    marginTop: 20
  }
});