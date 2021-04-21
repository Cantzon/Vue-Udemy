<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherProp="bruh"> </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CourseGoals",
  data() {
    return {
      goals: ['Learn Vue', 'Finish Vue']
    }
  }
}
</script>

<style scoped>

</style>