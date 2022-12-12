<template>
  <h1 class="text-4xl font-bold">Gift Search Bar</h1>
  <v-text-field
    label="Search"
    placeholder="Start typing..."
    v-model="searchTerm"
    :loading="loading"
  />

  <v-list v-if="results.length">
    <v-list-item
      v-for="item in results"
      :key="item.id"
      :title="item.title"
    ></v-list-item>
  </v-list>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import debounce from "debounce";
import { searchProducts, Product } from "@/services/products";

const searchTerm = ref("");
const results = ref([] as Product[]);
const loading = ref(false);
const findProducts = async (term: string) => {
  if (!term) {
    results.value = [];
  } else {
    try {
      loading.value = true;
      results.value = await searchProducts(term);
    } finally {
      loading.value = false;
    }
  }
};
const findProductsDebounced = debounce(findProducts, 300);
watch(searchTerm, async (newTerm) => await findProductsDebounced(newTerm));
</script>

<style></style>
