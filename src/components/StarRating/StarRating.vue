<script lang="ts" setup>
import type { StarRatingTypes } from '~/components/StarRating/StarRating.types';

defineProps<StarRatingTypes>();
</script>

<template>
  <IcStarFilled v-for="starFilled in rating" :key="starFilled" :font-controlled="false" :filled="true" />
  <IcStar v-for="star in 5 - rating" :key="star" :font-controlled="false" :filled="true" />
</template>
