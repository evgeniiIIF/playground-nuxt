<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();

await servicesAllEffects.fetchServicesAll();

const services = servicesAllState.value.servicesAllItems;
console.log(services);
</script>
<template>
  <section class="services-all">
    <div class="container">
      <h1 class="services-all__title">Services</h1>
      <!-- <button @click="$router.go(-1)">go back</button> -->
      <UIInputSearch />
    </div>
  </section>
</template>
