import { decorate, observable, action } from "mobx";
import * as firebase from "firebase";

class UserStore {
  @observable
  isUserSignedIn = false;

  @action
  createNewUser(email, password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => (this.isUserSignedIn = true))
      .catch((error) => this.setState({ errorMessage: error.message }));
  }

  @action
  signInUser(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => (this.isUserSignedIn = true))
      .catch((error) => this.setState({ errorMessage: error.message }));
  }

  @action
  signOut() {
    this.isUserSignedIn = false;
  }
}

export default new UserStore();
