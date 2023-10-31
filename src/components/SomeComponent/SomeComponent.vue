<script setup lang="ts">
// import { useCategoriesStore } from '@/store/categories';
// import { useServicesAllStore } from '@/store/servicesAll';
// import { useServicesTitleStore } from '@/store/servicesTitle';
// import { useHomeStore } from '../../store/home';
// import { usePartnersStore } from '~/store/partners';
// import { useWelcomeStore } from '~/store/welcome';
import { useCarsStore } from '~/store/cars';

// const { categoriesEffects, categoriesState } = useCategoriesStore();
// const { servicesAllEffects, servicesAllState } = useServicesAllStore();
// const { servicesTitleState, servicesTitleEffects } = useServicesTitleStore();
// const { homeState, homeEffects } = useHomeStore();
// const { partnersState, partnersEffects } = usePartnersStore();

// const { welcomeState, welcomeEffects } = useWelcomeStore();
const { carsState, carsEffects } = useCarsStore();

// await categoriesEffects.fetchCategoriesItems(316);
// await servicesAllEffects.fetchServicesAll();
// await servicesTitleEffects.fetchServicesTitle('авто');
// await homeEffects.fetchHome();
// await partnersEffects.fetchPartners();
// await partnersEffects.fetchPartnersItems();
// await welcomeEffects.fetchWelcome();
await carsEffects.fetchCars();
// await useAsyncData('mountains', () => servicesTitleEffects.fetchServicesTitle('авто'));
</script>

<template>
  <!-- <div>{{ categoriesState.categoriesItems }}</div> -->
  <!-- <div>{{ servicesAllState.servicesAllItems }}</div> -->
  <!--  <div>{{ servicesTitleState.servicesTitleItems }}</div>-->
  <!--  <div>{{ homeState }}</div>-->
  <!--  <div>{{ partnersState }}</div>-->
  <!--  <div>{{ welcomeState }}</div>-->
  <div>{{ carsState }}</div>
</template>
