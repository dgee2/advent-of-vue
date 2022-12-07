<template>
  <v-container>
    <p v-if="jokeState !== 'requesting'">
      {{ jokeSetup }}
    </p>
    <p v-if="jokeState === 'answer'">{{ jokeResponse }}</p>
    <v-btn @click="getAnswer()" v-if="jokeState === 'new'"> Tell Me! </v-btn>
    <v-btn @click="getNewJoke()" v-if="jokeState === 'answer'">
      New Joke
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
type JokeState = "requesting" | "new" | "answer";

type JokeResponse = {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
  lang: string;
};

const jokeState = ref("gettingJoke" as JokeState);

async function getNewJoke() {
  jokeState.value = "requesting";
  const result = await (
    await fetch("https://v2.jokeapi.dev/joke/christmas")
  ).json() as JokeResponse;
  jokeSetup.value = result.setup;
  jokeResponse.value = result.delivery;
  jokeState.value = "new";
}

function getAnswer() {
  jokeState.value = "answer";
}

const jokeSetup = ref("");
const jokeResponse = ref("");

getNewJoke();
</script>
