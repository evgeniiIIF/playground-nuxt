<script setup lang="ts">
import type { BonusProgram } from '@/components/BonusProgram/BonusProgram.types';

defineProps<BonusProgram>();
</script>

<template>
  <section class="bonus-program">
    <div class="container">
      <div class="bonus-program__wrapper">
        <div class="bonus-program__info">
          <h2 class="bonus-program__title">{{ bonus.title || '' }}</h2>
          <p class="bonus-program__tagline">{{ bonus.subtitle || '' }}</p>
          <p class="bonus-program__description">
            {{ bonus.description || '' }}
          </p>
          <UIButton v-if="bonus.showBtn" :text="bonus.titleLink || 'Получить карту'" :link="bonus.urlLink || ''" />
        </div>
        <div class="bonus-program__cards">
          <NuxtImg class="bonus-program__cards-img" src="/images/bonus-cards.png" alt="bonus-card" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bonus-program {
  background: #141c1c;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 0;

    @include tablet {
      align-items: inherit;
    }

    @include mobile {
      padding: 38px 0 50px 0;
      align-items: inherit;
    }
  }

  &__title {
    margin-bottom: 16px;

    @include title-main-bold;
    color: $color-white;

    @include mobile {
      margin-bottom: 2px;

      @include title-main-xxsmall-bold;
    }
  }

  &__tagline {
    margin-bottom: 20px;

    @include text-main;
    color: $color-white;
  }

  &__description {
    max-width: 488px;
    margin-bottom: 35px;

    @include text-main;
    color: $color-white;

    @include tablet {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
      margin-bottom: 30px;
    }
  }

  &__cards {
    width: 100%;
    max-width: 570px;
    display: flex;
    margin-right: 45px;

    @include media-range($desktop-form, $screen-medium-min) {
      margin-right: 0;
    }

    @include tablet {
      display: none;
    }

    @include mobile {
      display: none;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
