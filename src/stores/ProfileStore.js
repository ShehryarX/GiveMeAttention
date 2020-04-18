import { decorate, observable, action } from "mobx";
import * as firebase from "firebase";

// TODO(rishabh): Ummm What's happening??
class ProfileStore {
  findUser(username) {
    firebase
      .database()
      .ref("users")
      .on("value", function (snapshot) {
        snapshot.forEach(function (data) {
          if (data.key === username) {
            return true;
          }
        });
      });
    return false;
  }

  @action
  sendFriendRequest(CurrentUsername, FriendUsername) {
    if (this.findUser(FriendUsername) == true) {
      throw new Error("Unable to find username");
    }

    firebase
      .database()
      .ref("users/" + CurrentUsername + "/friendRequests/")
      .push({
        username: FriendUsername,
      });
  }

  //TODO(rishabh): Complete
  @action
  returnFriendsList(CurrentUsername) {
    var friendsList = [];
    firebase
      .database()
      .ref("users/" + CurrentUsername + "/friends")
      .on("child_added", function (snapshot) {
        snapshot.forEach(function (data) {
          console.log("Data" + data.val());
          friendsList.push(data.val);
        });
      });
    return friendsList;
  }

  //TODO(rishabh): Complete
  @action
  returnFriendRequestsList(CurrentUsername) {
    var friendRequestsList = [];
    firebase
      .database()
      .ref("users/" + CurrentUsername + "/friendRequests")
      .on("child_added", function (snapshot) {
        snapshot.forEach(function (data) {
          console.log("Data" + data.val());
          friendRequestsList.push(data.val);
        });
      });
    return friendRequestsList;
  }

  addFriend(CurrentUsername, FriendUsername) {
    if (this.findUser(FriendUsername) == true) {
      throw new Error("Unable to find username");
    }
    console.log("Adding " + FriendUsername + " to " + CurrentUsername);
    firebase
      .database()
      .ref("users/" + CurrentUsername + "/friends/")
      .push({
        username: FriendUsername,
      });
  }

  @action
  acceptFriendRequest(CurrentUsername, FriendUsername) {
    firebase
      .database()
      .ref("users/" + CurrentUsername + "/friendRequests")
      .on("child_added", function (snapshot) {
        let key = snapshot.key;
        if (snapshot.val()["username"] == FriendUsername) {
          console.log("Removing " + FriendUsername);
          firebase
            .database()
            .ref("users/" + CurrentUsername + "/friends/")
            .push({
              username: FriendUsername,
            });
          firebase
            .database()
            .ref("users/" + FriendUsername + "/friends/")
            .push({
              username: CurrentUsername,
            });
          firebase
            .database()
            .ref("users/" + CurrentUsername + "/friendRequests/")
            .child(key)
            .remove();
        }
      });
  }
}

export default new ProfileStore();
