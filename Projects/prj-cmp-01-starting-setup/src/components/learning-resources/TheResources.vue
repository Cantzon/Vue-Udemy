<template>
  <base-card>
    <base-button @click='changeTab("stored-resources")' :mode='storedButtonMode'> Stored Resources</base-button>
    <base-button @click='changeTab("add-resource")' :mode='addButtonMode'> Add Resource</base-button>
  </base-card>
  <component :is='selectedTab'></component>
</template>

<script>
import AddResource from './AddResource';
import StoredResources from './StoredResources';
export default {
  name: 'TheResources',
  components: {AddResource, StoredResources},
  data() {
    return {
      selectedTab: 'stored-resources',
      resources: [{
        id: 'official-guide',
        title: 'Vue.js Official Documentation',
        description: 'The official docs by the Vue.js creators, a fantastic resource to learn.',
        link: 'https://vuejs.org'
      }, {
        id: 'google-search',
        title: 'Google',
        description: 'Y\'all needa learn how to google man fr dawg',
        link: 'https://google.com'
      }],
    }
  },
  computed: {
    storedButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  provide() {
    return {
      resources: this.resources,
    }
  },
  methods: {
    changeTab(val) {
      this.selectedTab = val;
    }
  }
};
</script>

<style scoped>

</style>