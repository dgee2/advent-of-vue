<template>
  <div>
    <ChristmasTree v-if="size > 1" :size="size - 1" />

    <div class="flex flex-row justify-center">
      <!-- Create the tree sections -->
      <v-icon icon="mdi-checkbox-blank-circle" v-for="i in size" :key="`${size}-${i}`"  class="" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ size: number }>(), {
  size: 1,
});
</script>
