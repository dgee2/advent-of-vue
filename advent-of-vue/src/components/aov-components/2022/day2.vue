<template>
  <h1>Christmas Joke</h1>
  <v-container>
    <v-card min-height="80px" min-width="300px" max-width="500px" elevation="5">
      <v-card-item>
        <p v-show="jokeState !== 'requesting'">
          {{ jokeSetup }}
        </p>
        <p v-show="jokeState === 'answer'">{{ jokeResponse }}</p>
      </v-card-item>
    </v-card>
  </v-container>
  <v-btn @click="getAnswer()" v-show="jokeState === 'new'"> Tell Me! </v-btn>
  <v-btn @click="getNewJoke()" v-show="jokeState === 'answer'">
    New Joke
  </v-btn>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
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
  const result = (await (
    await fetch("https://v2.jokeapi.dev/joke/christmas")
  ).json()) as JokeResponse;
  jokeSetup.value = result.setup;
  jokeResponse.value = result.delivery;
  jokeState.value = "new";
}

function getAnswer() {
  jokeState.value = "answer";
}

const jokeSetup = ref("");
const jokeResponse = ref("");

onMounted(getNewJoke);
</script>
