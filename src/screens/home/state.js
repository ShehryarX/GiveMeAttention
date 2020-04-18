import { observable, action } from "mobx";
import { ProfileController } from "../../controllers/ProfileController";

export class HomeStore {
  @observable
  friendusername = "";

  @action
  handlefriendusernameChange = (username) => {
    this.friendusername = username;
  };

  @action
  handleAddFriend = () => {
    ProfileController.sendFriendRequest("rishabh", this.friendusername);
  };

  @action
  GetFriendsList = () => {
    ProfileController.returnFriendsList("rishabh");
  };

  @action
  AcceptFriendRequest = () => {
    ProfileController.acceptFriendRequest("rishabh", this.friendusername);
  };
}
