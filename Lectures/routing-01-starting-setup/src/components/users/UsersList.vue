<template>
  <ul>
    <user-item v-for='user in users' :key='user.id' :name='user.fullName' :role='user.role'></user-item>
  </ul>
  <button @click='navButtonClick'>Go to teams</button>
  <button @click='saveChanges'> Save Changes</button>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      saved: false
    };
  },
  methods: {
    navButtonClick() {
      // DO some thing here
      this.$router.push('/teams');
    },
    saveChanges() {
      this.saved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('userslist beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('userslist beforeRouteLeave');
    console.log(to,from);
    if(this.saved){
      next();
    } else {
      const confirmed = confirm("You sure you wanna leave?");
      next(confirmed);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>