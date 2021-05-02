<template>
  <base-container title='Vuex' v-if='loggedIn'>
    <the-counter></the-counter>
    <h3> {{ normalizedCounter }}</h3>
    <button @click='increment'> Add 1</button>
    <div>
      <input type='number' v-model.number='howMuch' />
      <button @click='increase({value: howMuch})'> Add {{ howMuch }}</button>
    </div>
  </base-container>
  <base-container title='Auth'>
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import { mapGetters, mapActions } from 'vuex';
import UserAuth from './components/UserAuth';

export default {
  components: {
    UserAuth,
    TheCounter,
    BaseContainer
  },
  data() {
    return {
      howMuch: 0
    };
  },
  computed: {
    // normalizedCounter() {
    //   return this.$store.getters.normalizedCounter;
    // }
    ...mapGetters(['normalizedCounter', 'loggedIn'])
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // addValue() {
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: this.howMuch
    //   });
    // }
    ...mapActions(['increment', 'increase'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>