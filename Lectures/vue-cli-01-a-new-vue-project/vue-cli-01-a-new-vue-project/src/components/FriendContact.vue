<template>
  <li>
    <h3> {{ friend.name }}</h3>
    <ul v-if="visibleDetails">
      <li> <strong>Phone: </strong>{{ friend.phone }}</li>
      <li> <strong>Email: </strong> {{ friend.email }}</li>
    </ul>
    <button @click="toggleDetails"> {{ visibleDetails ? 'Hide' : 'Show'}} Details</button>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  data() {
    return {
      visibleDetails: false,
      friend: {
        name: 'Bruh Moment',
        phone: '123 456',
        email: 'bruh@moment'
      },
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