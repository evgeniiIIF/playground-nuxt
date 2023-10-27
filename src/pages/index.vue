<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();

await servicesAllEffects.fetchServicesAll();

const services = servicesAllState.value.servicesAllItems;
</script>

<template>
  <div>
    <WelcomeSlider />
    <RepairCalculation />
    <BonusProgram />
    <AutoServices :services="services" />
    <OurPartners />
    <AutoBrands />
    <AboutCompany />
    <ClientsReviews />
  </div>
</template>

<style lang="scss"></style>
