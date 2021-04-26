<template>
  <ul>
    <learning-resource
      v-for='res in resources'
      :key='res.id'
      :title='res.title'
      :description='res.description'
      :link='res.link'
      @deleteRes='deleteResource(res.id)'>
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource';

export default {
  name: 'StoredResources',
  components: { LearningResource },
  inject: ['resources', 'deleteResource'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>