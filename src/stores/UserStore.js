import { decorate, observable, action } from "mobx";

class UserStore {
    isUserSignedIn = false;

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
    signOut: action
});

export default new UserStore();