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
      <div class="services-all__top">
        <h1 class="services-all__title">Поиск по услугам автосервиса</h1>
        <!-- <button @click="$router.go(-1)">go back</button> -->
        <div class="services-all__input">
          <UIInputSearch />
        </div>
      </div>
      <div class="services-all__nav">
        <ServicesAllNav :services="services" />
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.services-all {
  height: calc(100vh - 115px);

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__title {
    margin-bottom: 11px;
  }

  &__top {
    padding: 34px 0 40px 0;
  }
  &__nav {
    flex: 1 1 auto;
  }
}
</style>
