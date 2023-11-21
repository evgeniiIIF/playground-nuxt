<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import type { AboutPartner } from '@/components/AboutPartner/AboutPartner.types';

const { isMobile } = useMediaSizes();

defineProps<AboutPartner>();
</script>

<template>
  <section class="about-partner">
    <div class="container">
      <h2 class="about-partner__title">{{ aboutPartner.title }}</h2>
      <div class="about-partner__row">
        <div class="about-partner__description" v-html="aboutPartner.description"></div>
        <div v-if="aboutPartner.showBtn && !isMobile" class="about-partner__button">
          <UIButton :text="aboutPartner.btnTitle" :is-filled="true" :size-large="true" :link="aboutPartner.linkUrl" />
        </div>
      </div>
      <div class="about-partner__link">
        <UILink type="a" :text="aboutPartner.linkText" :link="aboutPartner.linkUrl" />
      </div>
      <div v-if="aboutPartner.showBtn && isMobile" class="about-partner__button">
        <UIButton :text="aboutPartner.btnTitle" :is-filled="true" :size-large="true" :link="aboutPartner.linkUrl" />
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

    p {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  &__button {
    width: 100%;
    max-width: 285px;

    @include mobile {
      max-width: inherit;
    }
  }

  &__link {
    display: flex;

    @include mobile {
      margin-bottom: 30px;
    }
  }
}
</style>
