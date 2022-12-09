<template>
  <v-container>
    <v-card style="width: 300px">
      <v-card-title>Merry Christmas!</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="displayTo" readonly solo />
          <v-text-field v-model="displayFrom" readonly solo />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
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
