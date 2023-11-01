<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import Slider from '@vueform/slider';
import { BONUS_CARDS } from './bonus.constants';

const [isOpenModal, openModal, closeModal] = useBooleanState(false);
const { isMobile } = useMediaSizes();

const bonusSummaCount = ref(0);
</script>
<template>
  <section class="bonus">
    <div class="container">
      <div class="bonus__wrapper">
        <div class="bonus__top">
          <h2 class="bonus__title">Бонусная программа</h2>
          <p class="bonus__subtitle">Выгода с ABS-autoservice – это просто!</p>
        </div>
        <div class="bonus__cards">
          <div class="bonus__cards-row">
            <div class="bonus__cards--small">
              <div v-for="item in BONUS_CARDS" :key="item.title" class="bonus__card-small card-bonus-small">
                <div class="card-bonus-small__title">{{ item.title }}</div>
                <div class="card-bonus-small__subtitle">{{ item.subtitle }}</div>
              </div>
            </div>
            <div class="bonus__cards--big">
              <div class="card-bonus-big">
                <div class="card-bonus-big__image">
                  <div class="card-bonus-big__image--mobile">
                    <IcLogoWhiteMobile :font-controlled="false" :filled="true" />
                  </div>
                  <div class="card-bonus-big__image--desktop">
                    <IcLogoWhite :font-controlled="false" :filled="true" />
                  </div>
                </div>
                <div class="card-bonus-big__bottom">
                  <div class="card-bonus-big__title">Бонусная карта</div>
                  <div class="card-bonus-big__card-number">**** 1234</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="Boolean(!isMobile)" class="bonus__cards-button">
            <UIButton text="Узнать подробнее" @click="openModal" />
          </div>
        </div>
        <div class="bonus__bottom">
          <h1>bonus__bottom</h1>
          <div>
            <Slider v-model="bonusSummaCount" />
          </div>
        </div>
      </div>
    </div>
    <div class="bonus__form">
      <ServiceForm />
    </div>
    <UIModal :is-open="isOpenModal" position="center" @on-close="closeModal">
      <AppCallbackForm title="Получить бонусную карту" />
    </UIModal>
  </section>
</template>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss">
.bonus {
  &__wrapper {
    padding: 80px 0 60px;
  }
  &__top {
    margin-bottom: 55px;
  }
  &__title {
    margin-bottom: 16px;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 133.333% */
    color: var(--Black, #18243c);
  }
  &__subtitle {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--6, #6b6f6e);
  }
  &__cards {
    margin-bottom: 56px;
  }
  &__cards-row {
    display: flex;
    margin-bottom: 30px;

    @include to(1145px) {
      flex-direction: column-reverse;
    }
    @include mobile() {
      flex-direction: column-reverse;
    }
  }
  &__cards--small {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    margin: -17px -10px;
  }
  &__card-small {
    width: calc(50% - 20px);
    border: 1px solid #000;
    margin: 17px 10px;
    @include mobile() {
      width: calc(100%);
    }
  }
  &__cards--big {
    flex: 0 0 488px;
    margin-left: 10.1666667%;
    margin-top: 5px;
    @include to(1145px) {
      flex: 0 0 auto;
      margin: 0;
      margin-bottom: 55px;
      @include mobile() {
        width: auto;
      }
    }
  }
  &__cards-button {
    .button {
      background: #00a19c;
    }
  }
}

.card-bonus-small {
  min-height: 150px;
  padding: 26px 30px;
  border: 1px solid var(--input-gray, #c4cccc);
  background: var(--1, #fff);
  &__title {
    margin-bottom: 9px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    color: var(--4, #3f3f41);
  }
  &__subtitle {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--6, #6b6f6e);
  }
}
.card-bonus-big {
  max-width: 488px;
  padding: 56px 40px 44px;
  border-radius: 5px;
  background: var(--2, #00a19c);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  @include mobile() {
    padding: 32px 20px 27px;
    max-width: 328px;
  }
  &__image {
    margin-bottom: 23.5655738%;

    &--desktop {
      display: block;
    }
    &--mobile {
      display: none;
    }
    @include mobile() {
      &--desktop {
        display: none;
      }
      &--mobile {
        display: block;
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    color: var(--1, #fff);
    @include mobile() {
      font-size: 14px;
      line-height: 15px;
    }
  }
  &__card-number {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 83.333% */
    color: var(--1, #fff);
    @include mobile() {
      font-size: 14px;
    }
  }
}
</style>
