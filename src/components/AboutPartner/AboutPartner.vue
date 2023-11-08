<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isMobile } = useMediaSizes();
</script>

<template>
  <section class="about-partner">
    <div class="container">
      <h2 class="about-partner__title">Стать партнером</h2>
      <div class="about-partner__row">
        <p class="about-partner__description">
          Желаете открыть свой автосервис под брендом ABS-autoservice Заполните заявку на сайте и мы свяжемся с Вами для
          уточнения деталей
        </p>
        <div v-show="!isMobile" class="about-partner__button">
          <UIButton text="Стать партнером" :is-filled="true" :size-large="true" />
        </div>
      </div>
      <div class="about-partner__link">
        <UILink type="a" text="перейти на сайт франшизы" link="/#" />
      </div>
      <div v-show="isMobile" class="about-partner__button">
        <UIButton text="Стать партнером" :is-filled="true" :size-large="true" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-partner {
  padding: 60px 0 100px 0;
  background-color: $color-light-gray-light;

  @include mobile {
    padding: 38px 0 50px 0;
  }

  &__title {
    margin-bottom: 16px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 2px;
      @include title-main-xxsmall-bold;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    gap: 20px;
  }

  &__description {
    max-width: 455px;
    @include text-main;
    color: $color-gray-dark;
  }

  &__button {
    width: 100%;
    max-width: 285px;

    @include mobile {
      max-width: inherit;
    }
  }

  &__link {
    @include mobile {
      margin-bottom: 30px;
    }
  }
}
</style>
