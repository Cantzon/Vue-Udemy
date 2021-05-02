<template>
<h3> {{ counter }}</h3>
</template>

<script>
export default {
  name: 'TheCounter',
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>

<style scoped>

</style>