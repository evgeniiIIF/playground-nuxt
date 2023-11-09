<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import { useMediaSizes } from '@/composables/useMediaSizes';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();

await useAsyncData('services', async () => {
  await Promise.all([servicesAllState.value.servicesAllItems.length === 0 && servicesAllEffects.fetchServicesAll()]);
});

const services = servicesAllState.value.servicesAllItems;

const { isDesktop } = useMediaSizes();
</script>
<template>
  <section class="services-all">
    <div class="container">
      <div class="services-all__top">
        <div v-show="!isDesktop" class="services-all__buttons-mobile mobile-buttons-service-all">
          <button type="button" class="mobile-buttons-service-all__go-back" @click="$router.go(-1)">
            <div class="mobile-buttons-service-all__go-back-arrow">
              <IcArrowLeft :font-controlled="false" :filled="true" />
            </div>
            <div class="mobile-buttons-service-all__go-back-text">Назад</div>
          </button>
          <div class="mobile-buttons-service-all__close">
            <IcClose :font-controlled="false" :filled="true" />
          </div>
        </div>
        <div v-show="!isDesktop" class="mobile-buttons-service-all__input">
          <UIInputSearch />
        </div>
        <h2 v-show="isDesktop" class="services-all__title">Поиск по услугам автосервиса</h2>
        <h2 v-show="!isDesktop" class="services-all__title">Услуги</h2>
        <!-- <button @click="$router.go(-1)">go back</button> -->
        <div v-show="isDesktop" class="services-all__input">
          <UIInputSearch />
        </div>
      </div>
      <div class="services-all__nav">
        <ServicesAllNavMobile v-show="!isDesktop" :services="services" />
        <ServicesAllNav v-show="isDesktop" :services="services" />
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
    @include to(1280px) {
      padding: 15px 0 25px 0;
    }
  }
  &__nav {
    flex: 1 1 auto;
  }

  &__buttons-mobile {
    margin-bottom: 12px;
  }
}
.mobile-buttons-service-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__go-back {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  &__go-back-arrow {
    margin-right: 4px;
    display: flex;
    align-items: center;
  }
  &__go-back-text {
    color: #b3baba;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }
  &__close {
    display: flex;
    align-items: center;
    svg {
      @include fill-svg-and-path(#b3baba);
    }
  }
  &__input {
    margin-bottom: 23px;
    .input-search__input {
      width: 100%;
      padding: 10px;
    }
    .input-search__icon {
      right: 10px;
    }
  }
}
</style>
