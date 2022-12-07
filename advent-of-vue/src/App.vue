<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list v-model:opened="open">
        <router-link to="/" custom v-slot="{ navigate }">
          <v-list-item
            prepend-icon="mdi-home"
            title="Home"
            @click="navigate()"
          ></v-list-item
        ></router-link>
        <v-list-group value="2022">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="2022" />
          </template>

          <router-link v-for="exercise in exercises" :to="exercise.path" custom v-slot="{ navigate }" :key="exercise.path">
            <v-list-item :title="exercise.name" @click="navigate()" />
          </router-link>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container><router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import exercises from "./services/exercises";
import { ref } from "vue";

const theme = ref("light");

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

const drawer = ref(true);

const open = ref(['2022']);
</script>
