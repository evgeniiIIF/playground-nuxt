<script setup lang="ts">
import { useOffersStore } from '@/store/offers';

const { offersEffects, offersState } = useOffersStore();
await offersEffects.fetchOffersItems();
console.log(offersState.value.offersItems);
</script>

<template>
  <section class="offers">
    <div class="container">
      <h1 class="offers__title">Акции</h1>
    </div>
  </section>
</template>

<style lang="scss">
.offers {
  &__title {
    @include title-main-bold();
  }
}
</style>
