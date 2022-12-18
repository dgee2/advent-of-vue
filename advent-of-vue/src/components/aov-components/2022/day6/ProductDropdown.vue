<template>
  <v-autocomplete
    :items="itemsToShow"
    :loading="isFetchingItems"
    v-model="selectedItem"
    return-object
  />
</template>

<script setup lang="ts">
import { watch, ref, computed } from "vue";
import { useItemComparison } from "@/composables/day6/itemComparison";
import { Product } from "@/services/products";
import { stringComparator } from "@/services/stringSort";
const { availableItems, isFetchingItems, itemsToCompare } = useItemComparison();

const selectedItem = ref(null as Product | null);

watch(selectedItem, (newItem, previousItem) => {
  itemsToCompare.value = itemsToCompare.value.filter((item) => {
    return item.id !== previousItem?.id;
  });

  if (newItem) itemsToCompare.value.push(newItem);
});

const itemsToShow = computed(() =>
  availableItems.value
    .filter(
      (x) =>
        x.id === selectedItem.value?.id ||
        !itemsToCompare.value.some((y) => x.id === y.id)
    )
);
</script>

<style scoped></style>
