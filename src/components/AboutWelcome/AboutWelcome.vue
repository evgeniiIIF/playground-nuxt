<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import type { AboutWelcome } from '@/components/AboutWelcome/AboutWelcome.types';

defineProps<AboutWelcome>();
</script>

<template>
  <section class="about-welcome">
    <div class="container">
      <h1 class="about-welcome__title">{{ aboutWelcome.title }}</h1>
      <p class="about-welcome__subtitle">{{ aboutWelcome.subtitle }}</p>
      <Swiper
        class="about-welcome__slider"
        :modules="[Pagination, Autoplay]"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{ delay: 3000 }"
        loop
      >
        <SwiperSlide v-for="slide in aboutWelcome.slider" :key="slide.id" class="about-welcome__slider-slide">
          <NuxtImg
            class="about-welcome__slider-slide-img"
            :src="slide.image_webp || slide.image"
            :alt="slide.image_title || 'company-photo'"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.about-welcome {
  padding: 79px 0 60px 0;

  @include mobile {
    padding: 58px 0 60px 0;
  }

  &__title {
    margin-bottom: 6px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      @include title-main-xxsmall-bold;
      margin-bottom: 2px;
    }
  }

  &__subtitle {
    margin-bottom: 25px;
    @include text-main;
    color: $color-gray-dark;

    @include mobile {
      margin-bottom: 20px;
    }
  }

  &__slider {
    &-slide {
      display: flex;

      &-img {
        width: 100%;
        height: 100%;
        max-height: 520px;
        object-fit: cover;
      }
    }

    .swiper {
      &-pagination {
        &-bullets {
          display: flex;
          justify-content: center;
          padding: 0 10px;
          margin-bottom: 23px;

          .swiper-pagination-bullet {
            margin: 0;
          }

          @include mobile {
            margin-bottom: 0;
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
