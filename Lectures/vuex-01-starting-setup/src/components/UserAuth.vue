<template>
  <button @click='logIn' v-if='!loggedIn'>Login</button>
  <button @click='logOut' v-else>Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserAuth',
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    ...mapActions(['logIn', 'logOut'])
  }
};
</script>

<style scoped>

</style>