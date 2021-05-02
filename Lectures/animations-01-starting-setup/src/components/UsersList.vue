<template>
<ul>
  <li v-for='user in users' :key='user' @click='removeUser(user)'> {{user}}</li>
</ul>
<div>
  <input type='text' ref='addUser'>
  <button @click='addUser'>Add User</button>
</div>
</template>

<script>
export default {
  name: 'UsersList',
  data() {
    return {
      users: ['Hari', 'Raghid', 'Zuhair', 'Mariyam', 'Dina', 'Zan', 'Faiha'],
    }
  },
  methods: {
    addUser(){
      const newUser = this.$refs.addUser;
      this.users.unshift(newUser.value);
    },
    removeUser(user){
      this.users = this.users.filter(el => el !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
}

li {
  border: 1px solid black;
  padding: 0.5rem;
  text-align: center;

}
</style>