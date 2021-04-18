<template>
  <li>
    <h3>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h3>
    <ul v-if="visibleDetails">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
    <button @click="toggleDetails">
      {{ visibleDetails ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  props: {
    id: String,
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      visibleDetails: false
    };
  },
  methods: {
    toggleDetails() {
      this.visibleDetails = !this.visibleDetails;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    }
  }
};
</script>

<style scoped></style>
