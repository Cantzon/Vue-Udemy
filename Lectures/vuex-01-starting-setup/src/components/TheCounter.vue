<template>
  <h3> {{ counter }}</h3>
</template>

<script>
export default {
  name: 'TheCounter',
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    }
  }
};
</script>

<style scoped>

</style>