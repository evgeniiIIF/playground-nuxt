<script setup lang="ts">
import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

const props = defineProps<{ services: ServicesAllItem[] }>();

const currentServicesItemL1 = ref<ServicesAllItem | undefined>();

const setCurrentServicesItemL1 = (item: ServicesAllItem) => {
  currentServicesItemL1.value = item;
};

const goTo = (item: ServicesAllItem | undefined) => {
  navigateTo({ path: `/services/${item?.slug}` });
};

const packagedColumnsItems = computed(() => {
  const arrayOfObjects = currentServicesItemL1.value?.children;
  const countItems = arrayOfObjects?.length ?? 0;
  const chunkSize = arrayOfObjects && arrayOfObjects.length ? Math.ceil(arrayOfObjects.length / 2) : 0;
  const arrayOfArrays = [];

  for (let i = 0; i < countItems; i += chunkSize) {
    const chunk = arrayOfObjects?.slice(i, i + chunkSize);
    arrayOfArrays.push(chunk);
  }

  return arrayOfArrays;
});

onMounted(() => setCurrentServicesItemL1(props.services[0]));
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
        <ServicesAllNavItemL1
          :item="servicesItemL1"
          @click="goTo(servicesItemL1)"
          @mouseenter="setCurrentServicesItemL1(servicesItemL1)"
        />
      </li>
    </ul>
    <ul class="services-all-nav__l2 services-all-nav-l2">
      <li v-for="(packagedColumnsItem, index) in packagedColumnsItems" :key="index" class="services-all-nav-l2__column">
        <ul class="services-all-nav-l2__column-list">
          <li
            v-for="servicesItemL2 in packagedColumnsItem"
            :key="servicesItemL2.id"
            class="services-all-nav-l2__column-item"
          >
            <ServicesAllNavItemL2 :item="servicesItemL2" @go-to="goTo($event)" />
          </li>
        </ul>
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
  overflow-y: auto;
  list-style: none;
  @include mr(35px);

  &__column {
  }

  &__column-list {
    @include mb(30px);
    padding-bottom: 80px;
  }

  &__column-item {
  }
}
</style>
