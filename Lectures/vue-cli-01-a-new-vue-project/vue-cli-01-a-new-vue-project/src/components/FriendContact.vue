<template>
  <li>
    <h3>{{ name }} {{ favorite ? '(Favorite)' : ''}}</h3>
    <ul v-if="visibleDetails">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
    <button @click="toggleDetails">
      {{ visibleDetails ? "Hide" : "Show" }} Details
    </button>
    <button  @click='toggleFavorite'> Toggle Favorite </button>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  props: {
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
      type: Number,
      required: false,
      default: 0,
      validator: function(value) {
        return value === 1 || value === 0;
      }
    }
  },
  data() {
    return {
      visibleDetails: false,
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.visibleDetails = !this.visibleDetails;
    },
    toggleFavorite() {
      this.favorite = !this.favorite;
    }
  }
};
</script>

<style scoped></style>
