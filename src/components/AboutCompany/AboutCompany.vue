<script lang="ts" setup>
import type { AboutCompany } from '@/components/AboutCompany/AboutCompany.types';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

defineProps<AboutCompany>();
</script>

<template>
  <section class="about-company">
    <div class="container">
      <div class="about-company__wrapper">
        <div class="about-company__info">
          <h2 class="about-company__title">{{ company.title || '' }}</h2>
          <div class="about-company__content">
            <div class="about-company__description" v-html="company.description"></div>
            <UIButton :text="company.titleLink || ''" :link="company.urlLink || ''" :is-filled="true" />
          </div>
        </div>
        <div class="about-company__slider-container">
          <Swiper
            :class="'about-company__slider'"
            :modules="[Pagination]"
            :slides-per-view="1"
            :pagination="{
              clickable: true,
            }"
            loop
          >
            <SwiperSlide v-for="slide in companySlider" :key="slide.id">
              <NuxtImg :src="slide.images_webp || slide.images" :alt="slide.title" fit="contain" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-company {
  position: relative;
  padding: 59px 0 62px 0;

  @include mobile {
    padding: 38px 0 62px 0;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;

    @include tablet {
      align-items: center;
    }

    @include mobile {
      align-items: center;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &__title {
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      @include title-main-xxsmall-bold;
    }
  }

  &__content {
    max-width: 590px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    margin-bottom: 60px;

    @include tablet {
      align-items: inherit;
    }

    @include mobile {
      align-items: inherit;
      margin-bottom: 40px;
    }
  }

  &__description {
    margin-bottom: 35px;

    @include text-main;
    color: $color-main;

    @include mobile {
      margin-bottom: 30px;
    }

    p {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }

  &__slider-container {
    max-width: 590px;
    align-self: flex-end;

    @include tablet {
      align-self: inherit;
    }

    @include mobile {
      align-self: inherit;
    }
  }

  &__slider {
    padding-bottom: 18px;
    cursor: pointer;

    .swiper {
      &-slide {
        width: 100% !important;

        img {
          max-width: 100%;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }

      &-pagination {
        bottom: -10px;
        transform: translateY(-50%);

        &-bullets {
          .swiper-pagination-bullet {
            margin: 0;
          }
        }

        &-bullet {
          width: 8px;
          height: 8px;
          margin: 0;
          border-radius: 50%;
          background-color: $color-light-gray-lighter;
          opacity: 1;

          &:not(:last-child) {
            margin-right: 4px;
          }

          &-active {
            background-color: $color-second;
          }
        }
      }
    }
  }
}
</style>
