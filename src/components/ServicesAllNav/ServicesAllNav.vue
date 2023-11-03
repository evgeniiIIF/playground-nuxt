<script setup lang="ts">
import type { ServicesAllItemParent } from '@/store/servicesAll/servicesAll.types';

const props = defineProps<{ services: ServicesAllItemParent[] }>();

const currentServicesItemL1 = ref<ServicesAllItemParent | undefined>();

const setCurrentServicesItemL1 = (item: ServicesAllItemParent) => {
  currentServicesItemL1.value = item;
};
</script>
<template>
  <nav class="services-all-nav">
    <ul class="services-all-nav__l1 services-all-nav-l1">
      <li
        v-for="servicesItemL1 in props.services"
        :key="servicesItemL1.id"
        :class="[
          'services-all-nav-l1__item',
          servicesItemL1.id === currentServicesItemL1?.id ? 'services-all-nav-l1__item--active' : '',
        ]"
      >
        <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
        <ServicesAllNavItemL1 :item="servicesItemL1" @mouseenter="setCurrentServicesItemL1(servicesItemL1)" />
      </li>
    </ul>
    <ul class="services-all-nav__l2 services-all-nav-l2">
      <li
        v-for="currentServiceItemL2 in currentServicesItemL1?.children"
        :key="currentServiceItemL2.id"
        class="services-all-nav-l2__item"
      >
        <ServicesAllNavItemL2 :item="currentServiceItemL2" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.services-all-nav {
  display: flex;
  height: calc(100vh - (115px + 166px));

  &__l1 {
    flex: 0 0 360px;
    margin-right: 47px;
  }
  &__l2 {
    flex: 1 1 auto;
    @include mb(30px);
  }
}
.services-all-nav-l1 {
  list-style: none;
  @include mb(5px);

  &__item {
    padding: 13px 15px;
  }
  &__item--active {
    background: #f3f3f3;
  }
}
.services-all-nav-l2 {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  list-style: none;

  &__item {
    flex: 1 1 auto;
  }
}
</style>
