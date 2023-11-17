<script lang="ts" setup>
import type { ServiceExamples } from '@/components/ServiceExamples/ServiceExamples.types';

defineProps<ServiceExamples>();
</script>

<template>
  <section class="service-examples">
    <div class="container">
      <div class="service-examples__slider">
        <AppSlider :gallery-items="galleryItems" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.service-examples {
  padding: 60px 0;

  @include mobile {
    padding: 29px 0 19px 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }

  &__title {
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      @include title-main-xxsmall-bold;
    }
  }

  &__slider {
    &-navigation {
      display: flex;
      gap: 20px;

      @include mobile {
        display: none;
      }
    }

    &-slide {
      filter: grayscale(100);

      @include mobile {
        max-width: 80%;
      }

      img {
        width: 100%;
      }
    }
  }

  .swiper-slide-active {
    filter: grayscale(0);
  }
}

// change native settings for Swiper
// .swiper-wrapper {
//   align-items: center;
// }
// .swiper-slide {
//   width: 24.166666667% !important;
// }
// .swiper-slide-active {
//   transition: all 0.3s ease 0s !important;
//   width: 48.333333333% !important;
// }
</style>
