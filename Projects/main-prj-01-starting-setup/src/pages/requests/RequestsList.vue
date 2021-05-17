<template>
  <base-dialog :show="!!error" title="Error" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item
          v-for="request in requests"
          :key="request.id"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet.</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem';
import BaseSpinner from '@/components/UI/BaseSpinner';
import BaseDialog from '@/components/UI/BaseDialog';

export default {
  name: 'RequestsList',
  components: { BaseDialog, BaseSpinner, RequestItem },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    requests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (e) {
        this.error = e.message || 'Failed';
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>