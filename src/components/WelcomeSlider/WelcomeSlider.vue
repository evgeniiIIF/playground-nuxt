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
          <UIButton :tag="'a'" :text="'Записаться на сервис'" :link="'#'" />
        </div>
      </AppContainer>
    </SwiperSlide>
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
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.welcome-slider {
  &__slide {
    background: url('~/assets/img/slide-1.png') no-repeat center;
    height: 700px;

    &-info {
      max-width: 590px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &-title {
        margin-bottom: 18px;
        font-size: 40px;
        font-weight: 600;
        line-height: 45px;
        color: $color-white;
      }

      &-description {
        margin-bottom: 34px;
        font-size: 18px;
        line-height: 25px;
        color: $color-gray;
      }

      &-button {
        padding: 15px 33px;

        border: 2px solid $color-second;
        text-decoration: none;
        line-height: 30px;
        color: $color-white;
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
