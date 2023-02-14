<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "./service/api";

interface quote {
  text: string;
  author: string;
}

const current = ref<quote>();
const quotes = ref<quote>();
const error = ref<boolean>(false);
const loading = ref<boolean>(false);
const disabled = ref<boolean>(false);

const randomItem = (quotes: quote[] | any): void => {
  current.value = quotes[Math.floor(Math.random() * quotes.length)];
};

onMounted(async () => {
  loading.value = true;
  disabled.value = true;

  try {
    const { data } = await api.get("/quotes");

    error.value = false;
    quotes.value = data;
    randomItem(quotes.value);

    loading.value = false;
    disabled.value = false;
  } catch (err) {
    error.value = true;
    console.error(err);
    loading.value = false;
    disabled.value = false;
  }
});
</script>

<template>
  <main>
    {{ current }}
    <button
      class="primary-button"
      :disabled="disabled"
      @click="randomItem(quotes)"
    >
      <!-- <img src="" alt=""> -->
      Random
    </button>
  </main>
</template>
