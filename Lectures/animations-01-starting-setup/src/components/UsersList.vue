<template>
  <transition-group tag='ul' name='list-group'>
    <li v-for='user in users' :key='user' @click='removeUser(user)'> {{ user }}</li>
  </transition-group>
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
      users: ['Hari', 'Raghid', 'Zuhair', 'Mariyam', 'Dina', 'Zan', 'Faiha']
    };
  },
  methods: {
    addUser() {
      const newUser = this.$refs.addUser;
      this.users.unshift(newUser.value);
    },
    removeUser(user) {
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

.list-group-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.list-group-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.list-group-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.list-group-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.list-group-enter-active {
  transition: all 1s ease-out;
}
.list-group-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}

.list-group-move {
  transition: all 1s ease;
}
</style>