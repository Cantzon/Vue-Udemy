<template>
  <section>
    <base-card>
      <template v-slot:header>
        <header>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </header>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/BaseCard";

export default {
  components: {BaseCard},
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>