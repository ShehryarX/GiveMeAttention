import { decorate, observable, action } from "mobx";
import * as firebase from "firebase";

class UserStore {
  @observable
  isUserSignedIn = false;

  @observable
  hasError = false;

  @observable
  errorMessage = "";

  @action
  createNewUser(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => (this.isUserSignedIn = true))
      .catch((error) => {
        hasError = true;
        errorMessage = "Error creating new user";
      });
  }

  @action
  signInUser(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => (this.isUserSignedIn = true))
      .catch((error) => {
        hasError = true;
        errorMessage = "Incorrect password";
      });
  }

  @action
  signOut() {
    this.isUserSignedIn = false;
  }
}

export default new UserStore();
