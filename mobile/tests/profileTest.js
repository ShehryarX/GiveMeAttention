(async function () {
  UserStore.username = "rishabh";

  const doesUserExist = await ProfileController.doesProfileWithUsernameExist(
    "ritika"
  );

  // console.log(doesUserExist);
  // await ProfileController.sendFriendRequestToUsername("ritika");

  // await ProfileController.addFriend("ritika");

  await firebase
    .database()
    .ref("/")
    .child(`users/${UserStore.username}/`)
    .child("friendRequests")
    .orderByChild("username")
    .equalTo("ritika")
    .once("value", (snapshot) =>
      snapshot.forEach((child) => child.ref.remove())
    );
  // // .ref(`users/rishabh/friendRequests/`)
  // .orderByChild("username")
  // .equalTo("ritika")
  // .removeValue();
})();
