<template>
  <li>
    <h3> {{ name }}</h3>
    <ul v-if="visibleDetails">
      <li> <strong>Phone: </strong>{{ phoneNumber }}</li>
      <li> <strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
    <button @click="toggleDetails"> {{ visibleDetails ? 'Hide' : 'Show'}} Details</button>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
  ],
  data() {
    return {
      visibleDetails: false,
    }
  },
  methods: {
    toggleDetails() {
      this.visibleDetails = !this.visibleDetails;
    }
  }
}
</script>

<style scoped>

</style>