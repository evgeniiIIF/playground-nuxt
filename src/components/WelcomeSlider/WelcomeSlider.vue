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
  <section class="welcome">
    <Swiper
      class="welcome__slider"
      :modules="[Pagination, Autoplay]"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{ delay: 3000 }"
      :speed="750"
      loop
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id" class="welcome__slider-slide">
        <div class="container" :class="{ 'container--items-centered': !isMobile }">
          <div class="welcome__slider-slide-info">
            <h2 class="welcome__slider-slide-info-title">{{ slide.title }}</h2>
            <p class="welcome__slider-slide-info-description">{{ slide.description }}</p>
            <UIButton v-if="slide.show_btn" :text="slide.title_link || ''" :link="slide.url_link || ''" />
          </div>
        </div>
        <div class="welcome__slider-slide-img-container">
          <NuxtImg
            v-if="!isMobile"
            :src="slide.image || slide.image_origin"
            :class="'welcome__slider-slide-img'"
            loading="lazy"
          />
          <NuxtImg
            v-else
            :src="slide.image_mobile || slide.image_mobile_origin"
            :class="'welcome__slider-slide-img'"
            loading="lazy"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style lang="scss">
.welcome {
  &__slider {
    &-slide {
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
          background-color: $color-gray;
          opacity: 1;

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
}
</style>
