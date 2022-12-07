<template>
  <h1 class="text-4xl font-bold">Gift Search Bar</h1>
  <v-text-field
    label="Search"
    placeholder="Start typing..."
    v-model="searchTerm"
    :loading="loading"
  />

  <v-list>
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

type SearchResult = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const searchTerm = ref("");
const results = ref([] as Product[]);
const loading = ref(false);
const findProducts = async (term: string) => {
  if (!term) {
    results.value = [];
  } else {
    try {
      loading.value = true;
      const requestResults = await fetch(
        `https://dummyjson.com/products/search?q=${term}`
      );
      const resultJson = (await requestResults.json()) as SearchResult;
      results.value = resultJson.products;
    } finally {
      loading.value = false;
    }
  }
};
const findProductsDebounced = debounce(findProducts, 300);
watch(searchTerm, async (newTerm) => await findProductsDebounced(newTerm));
</script>

<style></style>
