<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();

await servicesAllEffects.fetchServicesAll();

const services = servicesAllState.value.servicesAllItems;
console.log(services);
</script>
<template>
  <h1>Services</h1>
</template>
