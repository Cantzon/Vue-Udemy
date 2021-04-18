<template>
  <section>
    <header><h1>Friend List</h1></header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :email-address="friend.emailAddress"
        :phone-number="friend.phoneNumber"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>
  <section>
    <new-friend @add-friend="addFriend"></new-friend>
  </section>
</template>

<script>
import FriendContact from "./components/FriendContact";
import NewFriend from "./components/newFriend";

export default {
  name: "App",
  components: {NewFriend, FriendContact },
  data() {
    return {
      friends: [
        {
          id: "baba",
          name: "Baba Booey",
          emailAddress: "oh@yeah.com",
          phoneNumber: "123 456",
          isFavorite: true
        },
        {
          id: "bruh",
          name: "Bruh Moment",
          emailAddress: "stop@dude.com",
          phoneNumber: "456 123",
          isFavorite: false
        }
      ]
    };
  },
  methods: {
    toggleFavoriteStatus(friendID) {
      const favFriend = this.friends.find(friend => friend.id === friendID);
      favFriend.isFavorite = !favFriend.isFavorite;
    },
    addFriend(friend) {
      const newContact = {
        id: new Date().toISOString(),
        name: friend.name,
        emailAddress: friend.email,
        phoneNumber: friend.number,
        isFavorite: false,
      }
      this.friends.push(newContact);
    },
    deleteContact(friendID){
      this.friends = this.friends.filter(friend => friend.id !== friendID);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li, form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>
