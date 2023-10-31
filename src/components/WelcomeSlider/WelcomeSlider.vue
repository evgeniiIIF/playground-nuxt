<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import type { WelcomeSlider } from '@/components/WelcomeSlider/WelcomeSlider.types';
import { useMediaSizes } from '@/composables/useMediaSizes';

defineProps<WelcomeSlider>();

const { isMobile } = useMediaSizes();
</script>

<template>
  <Swiper
    class="welcome-slider"
    :modules="[Pagination, Autoplay]"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{ delay: 3000 }"
    loop
  >
    <SwiperSlide v-for="slide in slides" :key="slide.id" class="welcome-slider__slide">
      <AppContainer :class="{ 'container--items-centered': !isMobile }">
        <div class="welcome-slider__slide-info">
          <h2 class="welcome-slider__slide-info-title">Бесплатная замена трансмиссионного масла</h2>
          <p class="welcome-slider__slide-info-description">
            При единовременной покупке масла и фильтра в нашем автотехцентре
          </p>
          <UIButton :text="slide.title_link || ''" :link="slide.url_link || ''" />
        </div>
      </AppContainer>
      <div class="welcome-slider__slide-img-container">
        <NuxtImg v-if="!isMobile" :src="slide.image" :class="'welcome-slider__slide-img'" loading="lazy" />
        <NuxtImg v-else :src="slide.image_mobile" :class="'welcome-slider__slide-img'" loading="lazy" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.welcome-slider {
  &__slide {
    height: 700px;

    @include mobile {
      height: 445px;
    }

    &-info {
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @include mobile {
        max-width: inherit;
        padding-top: 36px;
      }

      &-title {
        margin-bottom: 18px;

        @include title-main-big-bold;
        color: $color-white;

        @include mobile {
          margin-bottom: 9px;
          @include title-main-small-bold;
        }
      }

      &-description {
        margin-bottom: 34px;
        font-size: 18px;
        line-height: 25px;
        color: $color-gray;

        @include text-main;

        @include mobile {
          margin-bottom: 20px;
        }
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: bottom;

      &-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
      }
    }
  }

  .swiper {
    &-pagination {
      &-bullets {
        display: flex;
        justify-content: center;
        padding: 0 10px;

        .swiper-pagination-bullet {
          margin: 0;
        }
      }

      &-bullet {
        width: 40px;
        height: 2px;
        border-radius: 0;

        &-active {
          background-color: $color-second;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
