<script setup lang="ts">
// import { useCategoriesStore } from '@/store/categories';
// import { useServicesAllStore } from '@/store/servicesAll';
// import { useServicesTitleStore } from '@/store/servicesTitle';
import { useHomeStore } from '../../store/home';

// const { categoriesEffects, categoriesState } = useCategoriesStore();
// const { servicesAllEffects, servicesAllState } = useServicesAllStore();
// const { servicesTitleState, servicesTitleEffects } = useServicesTitleStore();
const { homeState, homeEffects } = useHomeStore();

// await categoriesEffects.fetchCategoriesItems(316);
// await servicesAllEffects.fetchServicesAll();
// await servicesTitleEffects.fetchServicesTitle('авто');
await homeEffects.fetchHome();
// await useAsyncData('mountains', () => servicesTitleEffects.fetchServicesTitle('авто'));
</script>

<template>
  <!-- <div>{{ categoriesState.categoriesItems }}</div> -->
  <!-- <div>{{ servicesAllState.servicesAllItems }}</div> -->
  <!--  <div>{{ servicesTitleState.servicesTitleItems }}</div>-->
  <div>{{ homeState }}</div>
</template>
