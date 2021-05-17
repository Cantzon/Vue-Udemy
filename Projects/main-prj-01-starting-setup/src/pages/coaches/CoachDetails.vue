<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <h3>Interested? Click the button below!</h3>
        <base-button link :to="contactLink">Contact</base-button>
        <router-view v-slot='slotProps'>
          <transition name='contact'>
            <component :is='slotProps.Component'></component>
          </transition>
        </router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CoachDetails',
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + 'contact/';
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/getCoaches'].find(
      el => el.id === this.id
    );
  }
};
</script>

<style scoped>

.contact-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.contact-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.contact-enter-active {
  transition: all 0.2s ease-out;
}

</style>
