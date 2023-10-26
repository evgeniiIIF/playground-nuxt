<script setup lang="ts">
const props = defineProps<{
  title?: string;
  text?: string;
  image?: string;
  imageMobile?: string | null;
  slug?: string;
}>();
</script>

<template>
  <div class="offers-card-item">
    <div class="offers-card-item__image ibg">
      <img :src="image" :alt="title" />
    </div>
  </div>
</template>

<style lang="scss">
.offers-card-item {
  width: 100%;
  &__image {
    width: 100%;
    padding-top: 57.6271186%;
  }
}
</style>
