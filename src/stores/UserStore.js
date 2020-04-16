import { decorate, observable, action } from "mobx";
import * as firebase from "firebase";

class UserStore {
  @observable
  isUserSignedIn = false;

  @action
  signInUser(username, password) {
    this.isUserSignedIn = true;
  }

  @action
  signOut() {
    this.isUserSignedIn = false;
  }
}

export default new UserStore();
