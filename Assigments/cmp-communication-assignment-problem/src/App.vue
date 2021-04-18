<template>
  <div>
    <active-user :active-name="username" :active-age="age"></active-user>
  </div>
  <div>
    <user-data @change-details="changeDetails"></user-data>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser";
import UserData from "@/components/UserData";

export default {
  name: "App",
  components: {UserData, ActiveUser},
  data() {
    return {
      username: 'Name',
      age: 'Age',
    };
  },
  methods: {
    changeDetails(newName, newAge) {
      this.username = newName;
      this.age = newAge;
    }
  }
}
</script>

<style scoped>

</style>