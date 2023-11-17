<script setup lang="ts">
import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

const { item } = defineProps<{ item: ServicesAllItem }>();
</script>

<template>
  <div class="services-all-item-l1">
    <div v-if="item.icon" class="services-all-item-l1__icon">
      <img :src="item.icon" alt="Иконка категории" />
    </div>
    <h2 class="services-all-item-l1__title">{{ item.title }}</h2>
    <div class="services-all-item-l1__arrow">
      <IcArrowRight :font-controlled="false" :filled="true" />
    </div>
  </div>
</template>

<style lang="scss">
.services-all-item-l1 {
  display: flex;
  align-items: center;

  &:hover {
    background: #f3f3f3;
  }

  &__icon {
    display: flex;
    width: 24px;
    align-items: center;
    margin-right: 15px;
  }
  &__title {
    flex: 1 1 auto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
    color: #3f3f41;
  }
  &__arrow {
    display: flex;
    align-items: center;
    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
