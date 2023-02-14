<script setup lang="ts">
import { PropType } from "vue";
import { Quote } from "../../types/Quote";

defineProps({
  quote: {
    type: Object as PropType<Quote> | any,
    required: true,
  },
});
</script>

<template>
  <section>
    {{ quote.text }}
    {{ quote.author }}
  </section>
</template>

<style src="./_QuoteComponent.scss" lang="scss" scoped></style>
