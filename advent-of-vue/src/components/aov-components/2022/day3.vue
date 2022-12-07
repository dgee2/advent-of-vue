<template>
  <h1>Days Until Christmas</h1>
  <h2>{{ wholeDays }} Days, {{ wholeHours }} Hours, {{ wholeMinutes }} Minutes, {{ wholeSeconds }} Seconds</h2>
</template>

<script setup lang="ts">
import { useNow } from "@vueuse/core";
import { computed } from "vue";
const now = useNow();

const one_day = 1000 * 60 * 60 * 24;

const christmas = computed(() => new Date(now.value.getFullYear(), 11, 25));

const days = computed(
  () => (christmas.value.getTime() - now.value.getTime()) / one_day
);
const wholeDays = computed(() => Math.floor(days.value));

const hours = computed(() => (days.value - wholeDays.value) * 24);
const wholeHours = computed(() => Math.floor(hours.value));

const minutes = computed(() => (hours.value - wholeHours.value) * 60);
const wholeMinutes = computed(() => Math.floor(minutes.value));

const seconds = computed(() => (minutes.value - wholeMinutes.value) * 60);
const wholeSeconds = computed(() => Math.floor(seconds.value));
</script>

<style></style>
