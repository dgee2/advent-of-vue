<template>
  <p>
    You can get <strong>{{ numCheaperItems }}</strong> <em>{{ cheapItem.title }}</em> for
    about the same price as a single <em>{{ expensiveItem.title }}</em>.
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useItemComparison } from "@/composables/day6/itemComparison";
const { itemsToCompare } = useItemComparison();

const itemsSortedByPrice = computed(() =>
  [...itemsToCompare.value].sort((x1, x2) => x1.price - x2.price)
);

const cheapItem = computed(() => itemsSortedByPrice.value[0]);
const expensiveItem = computed(() => itemsSortedByPrice.value[1]);

const numCheaperItems = computed(
  () => expensiveItem.value.price / cheapItem.value.price
);
</script>

<style scoped></style>
