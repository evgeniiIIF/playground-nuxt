<script setup lang="ts">
import type { ServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

const { item } = defineProps<{ item: ServicesAllItemChild | undefined }>();
</script>

<template>
  <NuxtLink :to="`/services/${item?.slug}`" class="services-all-item-l3">
    <div class="services-all-item-l3__arrow">
      <IcArrowRight :font-controlled="false" :filled="true" />
    </div>
    <h2 class="services-all-item-l3__title">{{ item?.title }}</h2>
  </NuxtLink>
</template>

<style lang="scss">
.services-all-item-l3 {
  display: flex;
  align-items: center;

  &__arrow {
    display: flex;
    align-items: center;
    margin-right: 7px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
  &__title {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--3, #868789);
  }
}
</style>
