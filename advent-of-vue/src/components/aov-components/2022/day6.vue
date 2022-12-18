<template>
  <product-dropdown />
  <product-dropdown />
  <comparison-summary />
</template>

<script setup lang="ts">
import ProductDropdown from "./day6/ProductDropdown.vue";
import ComparisonSummary from "./day6/ComparisonSummary.vue";
import { onMounted } from "vue";
import { useItemComparison } from "@/composables/day6/itemComparison";
import { getAllProducts } from "@/services/products";
import { stringComparator } from "@/services/stringSort";
const { availableItems, isFetchingItems } = useItemComparison();

onMounted(async () => {
  try {
    availableItems.value = (await getAllProducts()).sort((x1, x2) =>
      stringComparator(x1.title, x2.title)
    );
  } finally {
    isFetchingItems.value = false;
  }
});
</script>

<style scoped></style>
