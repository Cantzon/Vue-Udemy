<template>
  <div>
    <!--    <TheHeader />-->
    <the-header></the-header>
    <button @click="switchTab('active-goals')"> Active Goals </button>
    <button @click="switchTab('manage-goals')"> Manage Goals</button>
<!--    <active-goals></active-goals>-->
<!--    <manage-goals></manage-goals>-->
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from "@/components/CourseGoals";
import ManageGoals from "@/components/ManageGoals";
import ActiveGoals from "@/components/ActiveGoals";

export default {
  components: {
    // CourseGoals,
    // 'the-header': TheHeader
    TheHeader,
    // BadgeList,
    // UserInfo,
    ManageGoals,
    ActiveGoals,

  },
  data() {
    return {
      selectedTab: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    switchTab(cmp) {
      this.selectedTab = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>