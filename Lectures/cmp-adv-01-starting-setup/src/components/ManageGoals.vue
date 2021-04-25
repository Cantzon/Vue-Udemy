<template>
  <div>
    <h2> Manage Goals </h2>
    <input type="text" ref="goal" />
    <button @click="addGoal"> Add Goal </button>
    <error-alert v-if="showError">
      <h2> Error!</h2>
      <p> Please enter a valid goal. </p>
      <button @click="showError = !showError"> Chill okay dude  </button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "@/components/ErrorAlert";
export default {
  name: "ManageGoals",
  components: {ErrorAlert},
  data() {
    return {
      showError: false,
    }
  },
  methods: {
    addGoal() {
      const enteredVal = this.$refs.goal.value;
      if (enteredVal === ''){
        this.showError = true;
      }
    }
  }
}
</script>

<style scoped>

</style>