<script setup lang="ts">
import type { ServicesAllItemParent } from '@/store/servicesAll/servicesAll.types';

const props = defineProps<{ services: ServicesAllItemParent[] }>();

const currentServicesItemL1 = ref<ServicesAllItemParent | undefined>();

const setCurrentServicesItemL1 = (item: ServicesAllItemParent) => {
  currentServicesItemL1.value = item;
};
</script>

<template>
  <nav class="services-all-nav-mobile">
    <ul class="services-all-nav-mobile-l1" v-if="!currentServicesItemL1">
      <li v-for="itemL1 in props.services" :key="itemL1.id" class="services-all-nav-mobile-l1__item">
        <div class="item-services-all-l1" @click="setCurrentServicesItemL1(itemL1)">
          <div class="item-services-all-l1__icon"><img :src="itemL1.icon" alt="." /></div>
          <div class="item-services-all-l1__title">{{ itemL1.title }}</div>
          <div class="item-services-all-l1__arrow"><IcArrowRight /></div>
        </div>
      </li>
    </ul>
    <ul class="services-all-nav-mobile-l1" v-if="currentServicesItemL1">
      <li v-for="itemL2 in currentServicesItemL1.children" :key="itemL2.id" class="services-all-nav-mobile-l1__item">
        <div class="item-services-all-l1">
          <div class="item-services-all-l1__title">{{ itemL2.title }}</div>
          <div class="item-services-all-l1__arrow"><IcArrowRight /></div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.services-all-nav-mobile {
  display: flex;
  height: calc(100vh - (115px + 166px));
}
.services-all-nav-mobile-l1 {
  list-style: none;
  @include mb(5px);

  &__item {
    padding: 13px 15px;
  }
  &__item--active {
    background: #f3f3f3;
  }
}
.item-services-all-l1 {
  display: flex;
  align-items: center;
  @include mr(10px);

  &__icon {
    display: flex;
    align-items: center;
    width: 24px;
  }
  &__title {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    color: var(--Black, #18243c);
  }
  &__arrow {
    display: flex;
    align-items: center;
  }
}
</style>
