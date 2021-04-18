<template>
  <section>
    <h2> {{activeName}} </h2>
    <h3> {{activeAge}} </h3>
  </section>
</template>

<script>
export default {
  name: "ActiveUser",
  props: ['activeName','activeAge'],
}
</script>

<style scoped>

</style>