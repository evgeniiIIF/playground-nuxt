<script setup lang="ts">
import { useOffersStore } from '@/store/offers';

const { offersEffects, offersState } = useOffersStore();
await offersEffects.fetchOffersItems();
console.log(offersState.value.offersItems);
</script>

<template>
  <section class="offers">
    <div class="container">
      <div class="offers__wrapper">
        <h1 class="offers__title">Акции</h1>
        <div class="offers__cards">
          <div v-for="item in offersState.offersItems" :key="item.id" class="offers__card">
            <OffersCardItem
              :title="item.title"
              :text="item.preview_text"
              :image="item.image"
              :image-mobile="item.image_mobile"
              :slug="item.slug"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.offers {
  &__wrapper {
    padding: 79px 0 60px 0;
  }
  &__title {
    margin-bottom: 31px;
    @include title-main-bold();
    color: $color-blue;
  }
  &__cards {
    @include row-flex();
  }
  &__card {
    @include col();
    @include size(6);
  }
}
</style>
