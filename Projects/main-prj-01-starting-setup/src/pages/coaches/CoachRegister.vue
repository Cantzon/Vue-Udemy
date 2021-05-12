<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-form @register-coach='addCoach'></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '@/components/coaches/CoachForm';


export default {
  name: 'CoachRegister',
  components: { CoachForm },
  methods: {
    addCoach(coachData){
      this.$store.dispatch('coaches/addNewCoach', coachData);
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped></style>
