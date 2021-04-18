<template>
  <section>
    <form @submit.prevent="$emit('change-details',username,number)">
      <div>
        <label> Name: </label>
        <input type="text" v-model="username">
      </div>
      <div>
        <label> Age: </label>
        <input type="number" v-model="number">
      </div>
      <button type="submit"> Change Details </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UserData",
  emits: ['change-details'],
  data() {
    return {
      username: '',
      number: '',
    }
  }
}
</script>

<style scoped>

</style>