<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import { useMediaSizes } from '@/composables/useMediaSizes';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();

await useAsyncData('services', async () => {
  await Promise.all([
    servicesAllState.value.servicesAllItems.length === 0 && servicesAllEffects.fetchServicesAll(),
  ])
})

const services = servicesAllState.value.servicesAllItems;

const { isMobile } = useMediaSizes();
</script>
<template>
  <section class="services-all">
    <div class="container">
      <div class="services-all__top">
        <div class="services-all__buttons-mobile mobile-buttons-service-all">
          <button type="button" class="mobile-buttons-service-all__go-back">
            <div class="mobile-buttons-service-all__go-back-arrow"></div>
            <div class="mobile-buttons-service-all__go-back-text"></div>
          </button>
        </div>
        <h1 class="services-all__title">{{ isMobile ? 'Услуги' : 'Поиск по услугам автосервиса' }}</h1>
        <!-- <button @click="$router.go(-1)">go back</button> -->
        <div class="services-all__input">
          <UIInputSearch />
        </div>
      </div>
      <div class="services-all__nav">
        <ServicesAllNavMobile v-if="isMobile" :services="services" />
        <ServicesAllNav v-if="!isMobile" :services="services" />
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
