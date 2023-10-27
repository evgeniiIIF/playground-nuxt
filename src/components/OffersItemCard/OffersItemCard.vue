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
  <div class="offers-item-card">
    <div class="offers-item-card__image ibg">
      <img :src="image" :alt="title" />
    </div>
    <div class="offers-item-card__title">{{ title }}</div>
    <div class="offers-item-card__popup popup-offers-item-card">
      <div class="popup-offers-item-card__title">{{ title }}</div>
      <div class="popup-offers-item-card__text">{{ text }}</div>
      <div class="popup-offers-item-card__button">
        <UIButton text="Подробнее" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.offers-item-card {
  position: relative;
  overflow: hidden;

  &:hover {
    .offers-item-card__popup {
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

.popup-offers-item-card {
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
