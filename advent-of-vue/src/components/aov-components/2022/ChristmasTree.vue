<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" />

    <div class="d-flex justify-center">
      <!-- Create the tree sections -->
      <v-icon icon="mdi-checkbox-blank-circle" v-for="i in size" :key="`${size}-${i}`" color="green" size="60px" style="margin: -10px;" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size: number }>(), {
  size: 1,
});
</script>
