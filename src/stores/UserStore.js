import { decorate, observable, action } from "mobx";
import * as firebase from "firebase";

class UserStore {
  isUserSignedIn = false;

  // @return `true` if user signed in successfully
  // @return `false` if signed in failed
  signInUser(username, password) {
    this.isUserSignedIn = true;
  }

  signOut() {
    this.isUserSignedIn = false;
  }
}

decorate(UserStore, {
  isUserSignedIn: observable,
  signInUser: action,
  signOut: action,
});

export default new UserStore();
