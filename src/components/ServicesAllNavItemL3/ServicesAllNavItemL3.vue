<script setup lang="ts">
import type { ServicesAllItem, ServicesAllItemEmits } from '@/store/servicesAll/servicesAll.types';

const { item } = defineProps<{ item: ServicesAllItem | undefined }>();
const emits = defineEmits<ServicesAllItemEmits>();
</script>

<template>
  <div class="services-all-item-l3" @click.stop="emits('goTo', item)">
    <div class="services-all-item-l3__arrow">
      <IcArrowRight :font-controlled="false" :filled="true" />
    </div>
    <h2 class="services-all-item-l3__title">{{ item?.title }}</h2>
  </div>
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
