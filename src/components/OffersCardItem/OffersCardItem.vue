<script setup lang="ts">
defineProps<{
  title?: string;
  text?: string;
  image?: string;
  imageMobile?: string | null;
  slug?: string;
}>();
</script>

<template>
  <div class="offers-card-item">
    <div class="offers-card-item__image ibg">
      <img :src="image" :alt="title" />
    </div>
    <div class="offers-card-item__title">{{ title }}</div>
    <div class="offers-card-item__popup popup-offers-card-item">
      <div class="popup-offers-card-item__title">{{ title }}</div>
      <div class="popup-offers-card-item__text">{{ text }}</div>
      <div class="popup-offers-card-item__button">
        <UIButton text="Подробнее" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.offers-card-item {
  position: relative;
  overflow: hidden;

  &:hover {
    .offers-card-item__popup {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  &__image {
    width: 100%;
    padding-top: 57.6271186%;
  }

  &__title {
    position: absolute;
    left: 30px;
    bottom: 24px;
    max-width: 70%;
    @include title-main-small-grow();
    color: $color-white;
  }
  &__popup {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.5s ease 0s;
  }
}

.popup-offers-card-item {
  padding: 26px 30px;
  background: $color-white;
  border: 1px solid #c4cccc;
  &__title {
    max-width: 80%;
    margin-bottom: 12px;
    @include title-main-small-grow();
    color: $color-blue;
  }
  &__text {
    max-width: 80%;
    margin-bottom: 24px;

    @include text-main();
  }
  &__button {
    .button {
      background: $color-second;
    }
  }
}
</style>
