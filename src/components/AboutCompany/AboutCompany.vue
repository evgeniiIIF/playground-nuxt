<script lang="ts" setup>
import { Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
</script>

<template>
  <section class="about-company">
    <AppContainer>
      <div class="about-company__wrapper">
        <div class="about-company__info">
          <h2 class="about-company__title">О&nbsp;компании</h2>
          <div class="about-company__content">
            <p class="about-company__description">
              ABS-autoservice – это сеть автосервисов федерального масштаба.
              <br /><br />
              Мы осуществляем профессиональный ремонт и обслуживание иномарок по&nbsp;выгодным ценам.
              <br /><br />
              Сеть автосервисов ABS-autoservice нацелена на премиальное обслуживание клиентов, отношения с которыми
              перерастают в долгосрочное сотрудничество.
              <br /><br />
              Наша команда – это специалисты, являющиеся экспертами в своей области, способные выявить и оперативно
              устранить даже чрезвычайно сложные, скрытые, непредвиденные повреждения и неисправности.
            </p>
            <div class="about-company__button">
              <UIButton :text="'Подробнее'" :link="'#'" :is-filled="true" />
            </div>
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
            <SwiperSlide>
              <NuxtImg src="/about-company-1.jpg" fit="contain" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/about-company-1.jpg" fit="contain" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/about-company-1.jpg" fit="contain" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/about-company-1.jpg" fit="contain" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <NuxtImg src="/about-company-1.jpg" fit="contain" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.about-company {
  padding: 59px 0 62px 0;

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
  }

  &__content {
    margin-top: 16px;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__description {
    margin-bottom: 35px;

    @include text-main;
    color: $color-main;
  }

  &__button {
    margin-bottom: 60px;
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
        img {
          width: 100%;
          height: 100%;
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
