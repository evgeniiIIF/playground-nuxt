<script lang="ts" setup>
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
</script>

<template>
  <section class="service-examples">
    <AppContainer>
      <div class="service-examples__header">
        <h2 class="service-examples__title">Примеры работ</h2>
        <div class="service-examples__slider-navigation">
          <UIArrowButton :arrow-direction="'left'" :class-for-swiper="'service-examples__slider-button-prev'" />
          <UIArrowButton :arrow-direction="'right'" :class-for-swiper="'service-examples__slider-button-next'" />
        </div>
      </div>
      <div class="service-examples__body">
        <Swiper
          class="service-examples__slider"
          :modules="[Navigation]"
          :slides-per-view="3"
          :space-between="20"
          :navigation="{
            prevEl: '.service-examples__slider-button-prev',
            nextEl: '.service-examples__slider-button-next',
          }"
        >
          <SwiperSlide class="service-examples__slider-slide">
            <NuxtImg src="/service-examples-1.jpg" fit="contain" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide class="service-examples__slider-slide">
            <NuxtImg src="/service-examples-1.jpg" fit="contain" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide class="service-examples__slider-slide">
            <NuxtImg src="/service-examples-1.jpg" fit="contain" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide class="service-examples__slider-slide">
            <NuxtImg src="/service-examples-1.jpg" fit="contain" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide class="service-examples__slider-slide">
            <NuxtImg src="/service-examples-1.jpg" fit="contain" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.service-examples {
  padding: 60px 0;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
  }

  &__title {
    @include title-main-bold;
    color: $color-blue;
  }

  &__body {
    height: 350px;
  }

  &__slider {
    &-navigation {
      display: flex;
      gap: 20px;
    }

    &-slide {
      transition: all 0.4s ease;

      img {
        width: 100%;
      }
    }
  }
}
</style>
