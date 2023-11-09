<script setup lang="ts">
import { useOffersStore } from '@/store/offers';

const { offersEffects, offersState } = useOffersStore();

await useAsyncData('offers', async () => {
  await Promise.all([offersState.value.offersItems.length === 0 && offersEffects.fetchOffersItems()]);
});

const countItems: Ref<number> = ref(8);
const incrementCountItems = () => (countItems.value += 8);
const offersItems = computed(() => offersState.value.offersItems.slice(0, countItems.value));
const showButton = computed(() => countItems.value < offersState.value.offersItems.length);
</script>

<template>
  <section class="offers">
    <div class="container">
      <div class="offers__wrapper">
        <h1 class="offers__title">Акции</h1>
        <div class="offers__cards">
          <div v-for="item in offersItems" :key="item.id" class="offers__card">
            <OffersItemCard
              :title="item.title"
              :text="item.preview_text"
              :image="item.image"
              :image-mobile="item.image_mobile"
              :slug="item.slug"
            />
          </div>
        </div>
        <div v-if="showButton" class="offers__button">
          <UIButton text="Загрузить еще" @click="incrementCountItems" />
        </div>
      </div>
    </div>
    <div class="offers__form">
      <ServiceForm />
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
    margin-bottom: 40px;
  }
  &__button {
    display: flex;
    justify-content: center;
    .button {
      @include button-text-big-grow();
      background: $color-second;
    }
  }
  &__card {
    @include col();
    @include size(6);
    @include mobile() {
      @include size(12);
    }
  }
}
</style>
