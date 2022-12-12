<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useItemComparison } from "@/composables/day6/itemComparison";
import { getAllProducts } from "@/services/products";
const { availableItems, isFetchingItems, itemsToCompare } = useItemComparison();

onMounted(async () => {
  try {
    availableItems.value = await getAllProducts();
  } finally {
    isFetchingItems.value = false;
  }
});
</script>

<style scoped></style>
