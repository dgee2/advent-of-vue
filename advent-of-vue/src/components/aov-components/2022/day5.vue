<template>
  <v-form style="width: 300px;">
    <v-text-field v-model="displayTo" readonly solo />
    <v-text-field v-model="displayFrom" readonly solo />
  </v-form>
  <v-form>
    <v-text-field v-model="to" label="First name" />
    <v-text-field v-model="from" label="Last name" />
  </v-form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const to = ref("");
const from = ref("");

const displayTo = computed(() => `To: ${to.value}`);
const displayFrom = computed(() => `From: ${from.value}`);
</script>

<style scoped></style>
