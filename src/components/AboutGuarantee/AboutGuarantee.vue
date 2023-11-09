<script setup lang="ts">
import type { AboutGuarantee } from '@/components/AboutGuarantee/AboutGuarantee.types';

defineProps<AboutGuarantee>();
</script>

<template>
  <section class="about-guarantee">
    <div class="container">
      <div class="about-guarantee__wrapper">
        <h2 class="about-guarantee__title">{{ aboutGuarantee.title }}</h2>
        <div class="about-guarantee__description" v-html="aboutGuarantee.description"></div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.about-guarantee {
  padding: 40px 0 60px 0;

  @include mobile {
    padding: 38px 0 50px 0;
  }

  &__wrapper {
    max-width: 590px;
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

  &__description {
    @include text-main;
    color: $color-gray-dark;

    p {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
