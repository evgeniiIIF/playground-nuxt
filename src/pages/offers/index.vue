<script setup lang="ts">
import { useOffersStore } from '@/store/offers';

const { offersEffects, offersState } = useOffersStore();
await offersEffects.fetchOffersItems();
console.log(offersState.value.offersItems);
// onMounted( () => {
// });
</script>

<template>
  <section class="offers">
    <div class="container">
      <h1>offers</h1>
    </div>
  </section>
</template>
