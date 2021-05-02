<template>
  <base-container title='Vuex'>
    <the-counter></the-counter>
    <h3> {{ normalizedCounter }}</h3>
    <button @click='increment'> Add 1</button>
    <div>
      <input type='number' v-model.number='howMuch' />
      <button @click='increase({value: howMuch})'> Add {{ howMuch }}</button>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
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
    ...mapGetters(['normalizedCounter'])
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