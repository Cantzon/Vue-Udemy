<template>
  <base-container title='Vuex'>
    <the-counter></the-counter>
    <h3> {{ normalizedCounter }}</h3>
    <button @click='addOne'> Add 1</button>
    <div>
      <input type='number' v-model.number='howMuch' />
      <button @click='addValue'> Add {{ howMuch }}</button>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';

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
    normalizedCounter() {
      return this.$store.getters.normalizedCounter;
    }
  },
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
    addValue() {
      this.$store.dispatch({
        type: 'increase',
        value: this.howMuch
      });
    }
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