<template>
  <form @submit.prevent="addFriend">
    <div>
      <label>Name: </label>
      <input type="text" v-model="friend.name" />
    </div>
    <div>
      <label>Phone Number: </label>
      <input type="tel" v-model="friend.number" />
    </div>
    <div>
      <label>Email Address: </label>
      <input type="email" v-model="friend.email" />
    </div>
    <div>
      <button type="submit" >Add New Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "newFriend",
  emits: ["add-friend"],
  data() {
    return {
      friend: {
        name: "",
        number: "",
        email: "",
      }
    };
  },
  methods: {
    addFriend() {
      this.$emit("add-friend", this.friend);
    }
  }
};
</script>

<style>

</style>
