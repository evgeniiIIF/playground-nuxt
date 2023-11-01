<script setup lang="ts">
  import {Autoplay, Pagination} from "swiper/modules";

  import 'swiper/scss';
  import 'swiper/scss/pagination';
</script>

<template>
  <section class="about-welcome">
    <AppContainer>
      <h1 class="about-welcome__title">О компании</h1>
      <p class="about-welcome__subtitle">Сеть автосервисов ABS-autoservice</p>
      <Swiper
        class="about-welcome__slider"
        :modules="[Pagination, Autoplay]"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{ delay: 3000 }"
        loop
      >
        <SwiperSlide v-for="slide in 2" :key="slide" class="about-welcome__slider-slide">
          <NuxtImg src="/about-slide-1.jpeg" :class="'about-welcome__slider-slide-img'" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </AppContainer>
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
          object-position: bottom;
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
