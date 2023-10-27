<script lang="ts" setup>
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
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
    <SwiperSlide class="welcome-slider__slide">
      <AppContainer :class="'container--items-centered'">
        <div class="welcome-slider__slide-info">
          <h2 class="welcome-slider__slide-info-title">Бесплатная замена трансмиссионного масла</h2>
          <p class="welcome-slider__slide-info-description">
            При единовременной покупке масла и фильтра в нашем автотехцентре
          </p>
          <UIButton :text="'Записаться на сервис'" :link="'#'" />
        </div>
      </AppContainer>
      <div class="welcome-slider__slide-img-container">
        <NuxtImg src="/slide-1.png" :class="'welcome-slider__slide-img'" loading="lazy" />
      </div>
    </SwiperSlide>
    <SwiperSlide class="welcome-slider__slide">
      <AppContainer :class="'container--items-centered'">
        <div class="welcome-slider__slide-info">
          <h2 class="welcome-slider__slide-info-title">Бесплатная замена трансмиссионного масла</h2>
          <p class="welcome-slider__slide-info-description">
            При единовременной покупке масла и фильтра в нашем автотехцентре
          </p>
          <UIButton variant="link" :text="'Записаться на сервис'" :link="'#'" />
        </div>
      </AppContainer>
      <div class="welcome-slider__slide-img-container">
        <NuxtImg src="/slide-1.png" :class="'welcome-slider__slide-img'" loading="lazy" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.welcome-slider {
  &__slide {
    height: 700px;

    &-info {
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @include mobile {
        max-width: inherit;
      }

      &-title {
        margin-bottom: 18px;

        @include title-main-big-bold;
        color: $color-white;

        @include mobile {
          @include title-main-small-bold;
        }
      }

      &-description {
        margin-bottom: 34px;
        font-size: 18px;
        line-height: 25px;
        color: $color-gray;

        @include text-main;
      }

      &-button {
        padding: 15px 33px;

        border: 2px solid $color-second;
        text-decoration: none;
        line-height: 30px;
        color: $color-white;
      }
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;

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
