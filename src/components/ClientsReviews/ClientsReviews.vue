<script lang="ts" setup>
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isMobile } = useMediaSizes();
</script>

<template>
  <section class="clients-reviews">
    <AppContainer>
      <div class-="clients-reviews__wrapper">
        <div class="clients-reviews__header">
          <h2 class="clients-reviews__title">Отзывы</h2>
          <div v-if="!isMobile" class="clients-reviews__slider-navigation">
            <UIArrowButton :arrow-direction="'left'" :class-for-swiper="'clients-reviews__slider-button-prev'" />
            <UIArrowButton :arrow-direction="'right'" :class-for-swiper="'clients-reviews__slider-button-next'" />
          </div>
        </div>
        <Swiper
          class="clients-reviews__slider"
          :modules="[Navigation]"
          :slides-per-view="3"
          :space-between="20"
          :navigation="{
            prevEl: '.clients-reviews__slider-button-prev',
            nextEl: '.clients-reviews__slider-button-next',
          }"
          :breakpoints="{
            1025: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 'auto',
            },
          }"
        >
          <SwiperSlide class="clients-reviews__slider-review">
            <div class="clients-reviews__slider-review-wrapper">
              <div class="clients-reviews__slider-review-header">
                <div class="clients-reviews__slider-review-title">
                  <h4 class="clients-reviews__slider-review-name">Роман Романов</h4>
                  <div class="clients-reviews__slider-review-icons">
                    <div class="clients-reviews__slider-review-rating">
                      <StarRating v-if="!isMobile" :rating="5" />
                    </div>
                    <IcYandex :font-controlled="false" :filled="true" />
                  </div>
                </div>
                <div class="clients-reviews__slider-review-subtitle">
                  <p class="clients-reviews__slider-review-date">26.07.2020</p>
                  <StarRating v-if="isMobile" :rating="5" />
                </div>
              </div>
              <div class="clients-reviews__slider-review-body">
                <p class="clients-reviews__slider-review-text">
                  Обслуживаю машину там почти постоянно. Вежливый персонал и все стараются объяснить,есть небольшие
                  косяки но они не значительны. Цену чуть конечно выше чем в обычном сто но тут можно быть уверенным
                  что&nbsp;не обманут (свято в это верю). Запчасти так же есть в наличии или под заказ. РЕКОМЕНДУЮ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="clients-reviews__slider-review">
            <div class="clients-reviews__slider-review-wrapper">
              <div class="clients-reviews__slider-review-header">
                <div class="clients-reviews__slider-review-title">
                  <h4 class="clients-reviews__slider-review-name">Роман Романов</h4>
                  <div class="clients-reviews__slider-review-icons">
                    <div class="clients-reviews__slider-review-rating">
                      <StarRating v-if="!isMobile" :rating="5" />
                    </div>
                    <IcGoogle :font-controlled="false" :filled="true" />
                  </div>
                </div>
                <div class="clients-reviews__slider-review-subtitle">
                  <p class="clients-reviews__slider-review-date">26.07.2020</p>
                  <StarRating v-if="isMobile" :rating="5" />
                </div>
              </div>
              <div class="clients-reviews__slider-review-body">
                <p class="clients-reviews__slider-review-text">
                  Работают быстро и на совесть, приятным бонусом можно считать кафе в котором можно пообедать, пока
                  занимаются автомобилем.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="clients-reviews__slider-review">
            <div class="clients-reviews__slider-review-wrapper">
              <div class="clients-reviews__slider-review-header">
                <div class="clients-reviews__slider-review-title">
                  <h4 class="clients-reviews__slider-review-name">Роман Романов</h4>
                  <div class="clients-reviews__slider-review-icons">
                    <div class="clients-reviews__slider-review-rating">
                      <StarRating v-if="!isMobile" :rating="5" />
                    </div>
                    <IcYandex :font-controlled="false" :filled="true" />
                  </div>
                </div>
                <div class="clients-reviews__slider-review-subtitle">
                  <p class="clients-reviews__slider-review-date">26.07.2020</p>
                  <StarRating v-if="isMobile" :rating="5" />
                </div>
              </div>
              <div class="clients-reviews__slider-review-body">
                <p class="clients-reviews__slider-review-text">
                  Грамотные мастера, адекватные люди на приемке. К&nbsp;качеству работ никаких претензий. Наконец-то
                  нашел нормальный сервис, где можно спокойно оставить авто и быть уверенным что все работы будут
                  выполнены и выполнены качественно.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="clients-reviews__slider-review">
            <div class="clients-reviews__slider-review-wrapper">
              <div class="clients-reviews__slider-review-header">
                <div class="clients-reviews__slider-review-title">
                  <h4 class="clients-reviews__slider-review-name">Роман Романов</h4>
                  <div class="clients-reviews__slider-review-icons">
                    <div class="clients-reviews__slider-review-rating">
                      <StarRating v-if="!isMobile" :rating="5" />
                    </div>
                    <IcYandex :font-controlled="false" :filled="true" />
                  </div>
                </div>
                <div class="clients-reviews__slider-review-subtitle">
                  <p class="clients-reviews__slider-review-date">26.07.2020</p>
                  <StarRating v-if="isMobile" :rating="5" />
                </div>
              </div>
              <div class="clients-reviews__slider-review-body">
                <p class="clients-reviews__slider-review-text">
                  Обслуживаю машину там почти постоянно. Вежливый персонал и все стараются объяснить,есть небольшие
                  косяки но они не значительны. Цену чуть конечно выше чем в обычном сто но тут можно быть уверенным
                  что&nbsp;не обманут (свято в это верю). Запчасти так же есть в наличии или под заказ. РЕКОМЕНДУЮ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="clients-reviews__slider-review">
            <div class="clients-reviews__slider-review-wrapper">
              <div class="clients-reviews__slider-review-header">
                <div class="clients-reviews__slider-review-title">
                  <h4 class="clients-reviews__slider-review-name">Роман Романов</h4>
                  <div class="clients-reviews__slider-review-icons">
                    <div class="clients-reviews__slider-review-rating">
                      <StarRating v-if="!isMobile" :rating="5" />
                    </div>
                    <IcYandex :font-controlled="false" :filled="true" />
                  </div>
                </div>
                <div class="clients-reviews__slider-review-subtitle">
                  <p class="clients-reviews__slider-review-date">26.07.2020</p>
                  <StarRating v-if="isMobile" :rating="5" />
                </div>
              </div>
              <div class="clients-reviews__slider-review-body">
                <p class="clients-reviews__slider-review-text">
                  Обслуживаю машину там почти постоянно. Вежливый персонал и все стараются объяснить,есть небольшие
                  косяки но они не значительны. Цену чуть конечно выше чем в обычном сто но тут можно быть уверенным
                  что&nbsp;не обманут (свято в это верю). Запчасти так же есть в наличии или под заказ. РЕКОМЕНДУЮ.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.clients-reviews {
  padding: 60px 0;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
  }

  &__title {
    @include title-main-bold;
    color: $color-blue;
  }

  &__slider {
    &-navigation {
      display: flex;
      gap: 20px;
    }

    &-review {
      padding: 30px 20px 50px 20px;
      border: $card-border;

      @include mobile {
        max-width: 80%;
      }

      &-wrapper {
        display: flex;
        flex-direction: column;
        height: 280px;
      }

      &-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 14px;
      }

      &-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-subtitle {
        display: flex;
        align-items: center;
      }

      &-name {
        @include text-main-xlarge-bold;
        color: $color-black-light;
      }

      &-date {
        @include text-main;
        color: $color-gray-light;

        @include mobile {
          margin-right: 10px;
        }
      }

      &-icons {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      &-text {
        @include text-main;
        color: $color-main;
      }
    }
  }
}
</style>
