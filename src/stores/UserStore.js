import { observable, action } from "mobx";
import * as firebase from "firebase";

class UserStoreImpl {
  @observable
  isUserSignedIn = false;

  @observable
  hasError = false;

  @observable
  errorMessage = null;

  @observable
  username = null;

  @observable
  uid = "";

  @action
  createNewUser(email, username, password) {
    email = email.toLowerCase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .database()
          .ref("users/" + username)
          .set({
            username,
            email,
            friends: {
              username: "0",
            },
            friendRequests: {
              username: "0",
            },
          });
        this.username = username;
        this.uid = firebase.auth().currentUser.uid;
        this.isUserSignedIn = true;
      })
      .catch(() => {
        this.hasError = true;
        this.errorMessage = "Error creating new user";
      });
  }

  @action
  dismissError() {
    this.hasError = false;
    this.error = null;
  }

  @action
  signInUser(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .database()
          .ref("/")
          .child("users")
          .orderByChild("email")
          .equalTo(this.email.toLowerCase())
          .on("value", (snapshot) => {
            const databaseVal = snapshot.val();
            this.uid = firebase.auth().currentUser.uid;
            this.isUserSignedIn = true;
            this.username =
              databaseVal[Object.keys(databaseVal)[0]]["username"];
          });
      })
      .catch(() => {
        this.hasError = true;
        this.errorMessage = "Incorrect password";
      });
  }

  @action
  signOut() {
    this.isUserSignedIn = false;
  }
}

export const UserStore = new UserStoreImpl();
