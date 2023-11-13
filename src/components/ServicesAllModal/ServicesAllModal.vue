<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import { useMediaSizes } from '@/composables/useMediaSizes';

const { servicesAllEffects, servicesAllState } = useServicesAllStore();

const emits = defineEmits<{ (event: 'closeServicesAllModal'): void; (event: 'closeMobileMenu'): void }>();

await useAsyncData('services', async () => {
  await Promise.all([servicesAllState.value.servicesAllItems.length === 0 && servicesAllEffects.fetchServicesAll()]);
});

const services = servicesAllState.value.servicesAllItems;

const { isDesktop } = useMediaSizes();
</script>
<template>
  <section class="services-all-modal">
    <ServicesAllDesktop v-if="isDesktop" :services="services" @closeServicesAllModal="emits('closeServicesAllModal')" />
    <ServicesAllMobile
      v-if="!isDesktop"
      :services="services"
      @closeServicesAllModal="emits('closeServicesAllModal')"
      @closeMobileMenu="emits('closeMobileMenu')"
    />
  </section>
</template>
<style lang="scss">
.services-all-modal {
  position: fixed;
  left: 0;
  top: 115px;
  z-index: 10001;
  width: 100%;
  height: calc(100vh - 115px);
  overflow: hidden;
  background: #fff;

  @include tablet {
    top: 0;
    height: 100vh;
  }
  @include mobile {
    top: 0;
    height: 100vh;
  }
  /* transform: translateY(-100%); */
  // transition: all 0.3s;
}
</style>
