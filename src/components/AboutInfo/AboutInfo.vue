<script setup lang="ts">
import type { AboutInfo } from '@/components/AboutInfo/AboutInfo.types';

defineProps<AboutInfo>();
</script>

<template>
  <section class="about-info">
    <div class="container">
      <div class="about-info__wrapper">
        <h2 class="about-info__title">{{ aboutInfo.title }}</h2>
        <div class="about-info__description" v-html="aboutInfo.description"></div>
        <div class="about-info__link">
          <UILink type="NuxtLink" :text="aboutInfo.linkText" :link="aboutInfo.linkUrl" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.about-info {
  padding: 60px 0 75px 0;
  background-color: $color-black-lighter;

  @include mobile {
    padding: 38px 0 50px 0;
  }

  &__wrapper {
    max-width: 490px;
  }

  &__title {
    margin-bottom: 16px;
    @include title-main-bold;
    color: $color-white;

    @include mobile {
      margin-bottom: 12px;
      @include title-main-xxsmall-bold;
      text-transform: uppercase;
    }
  }

  &__description {
    margin-bottom: 20px;
    @include text-main;
    color: $color-white-light;

    @include mobile {
      @include text-main-grow;
    }

    p {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  &__link {
    display: flex;
    @include text-main;
    color: $color-gray;
    text-decoration: underline;
  }
}
</style>
