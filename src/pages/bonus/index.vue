<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import Slider from '@vueform/slider';
import { useBonusStore } from '@/store/bonus';
import type { Bonus, BonusBenefit } from '@/store/bonus/bonus.types';

const { bonusState, bonusEffects } = useBonusStore();

await useAsyncData('bonus', async () => {
  await Promise.all([
    Object.keys(bonusState.value.bonus).length === 0 && bonusEffects.fetchBonus(),
    bonusState.value.benefits.length === 0 && bonusEffects.fetchBonusBenefits(),
  ]);
});

const [isOpenModal, openModal, closeModal] = useBooleanState(false);
const { isMobile } = useMediaSizes();

const bonus = bonusState.value.bonus as Bonus;
const benefits = bonusState.value.benefits as BonusBenefit[];

const bonusSliderPercent = ref(0);
const howMachSpendCount = computed(() => bonusSliderPercent.value * 1000);
const bonusAmountCount = computed(() => Math.floor(howMachSpendCount.value * 0.1155));
</script>
<template>
  <div>
    <section class="bonus">
      <div class="container">
        <div class="bonus__wrapper">
          <div class="bonus__top">
            <h2 class="bonus__title">{{ bonus.title }}</h2>
            <p class="bonus__subtitle">{{ bonus.subtitle }}</p>
          </div>
          <div class="bonus__cards">
            <div class="bonus__cards-row">
              <div class="bonus__cards--small">
                <div v-for="item in benefits" :key="item.id" class="bonus__card-small card-bonus-small">
                  <div class="card-bonus-small__title">{{ item.headline }}</div>
                  <div class="card-bonus-small__subtitle">{{ item.dsc }}</div>
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
            <div v-if="bonus.is_active_btn_bonus || Boolean(!isMobile)" class="bonus__cards-button">
              <UIButton :text="bonus.btn_bonus_title" :is-filled="true" :has-full-width="true" @click="openModal" />
            </div>
          </div>
          <div class="bonus__calculate bonus-calculate">
            <h6 class="bonus-calculate__title">Рассчитайте свою выгоду</h6>

            <div class="bonus-calculate__card card-bonus-calculate">
              <div class="card-bonus-calculate__top">
                <div class="card-bonus-calculate__top-title">Сумма которую вы тратите на обслуживание в год</div>
                <div class="card-bonus-calculate__top-amount">
                  {{ `${howMachSpendCount.toLocaleString('ru-RU')}₽` }}
                </div>
              </div>
              <div class="card-bonus-calculate__slider">
                <Slider v-model="bonusSliderPercent" :lazy="false" :tooltips="false" orientation="horizontal" />
              </div>
              <div class="card-bonus-calculate__bottom">
                <div class="card-bonus-calculate__bottom-title">Ваша выгода</div>
                <div class="card-bonus-calculate__bottom-amount">
                  {{ `${bonusAmountCount.toLocaleString('ru-RU')}₽` }}
                </div>
                <div class="card-bonus-calculate__bottom-text">
                  Сумма, которую бы Вы сэкономили благодаря бонусной программе
                </div>
              </div>
            </div>

            <p class="bonus-calculate__text">
              *бонусные баллы становятся доступны доступны через 14 дней после покупки и сохраняются втечение 6 месяцев.
              Бонусная программа не распространяется на приобретение шин и аккумуляторов, услуги тонирования,
              бронирования автомобиля и на малярно-кузовные работы. Условия бонусной программы могут меняться. Активация
              карты начинается с первой покупки.
            </p>
          </div>
        </div>
      </div>
      <LazyUIModal :is-open="isOpenModal" position="center" @on-close="closeModal">
        <LazyAppCallbackForm title="Получить бонусную карту" />
      </LazyUIModal>
    </section>
    <ServiceForm />
  </div>
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
    max-width: 206px;

    @include media-range($tablet-from, 1145px) {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
    }
  }
}

.card-bonus-small {
  min-height: 150px;
  padding: 26px 30px;
  border: 1px solid var(--input-gray, #c4cccc);
  background: var(--1, #fff);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 24px 24px -16px rgba(65, 64, 66, 0.2);
    background-color: $color-light-gray-light;
    border-color: $color-light-gray-darker;
    transform: translateY(-5px);
  }
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

.bonus-calculate {
  max-width: 590px;

  &__title {
    margin-bottom: 24px;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    color: var(--4, #3f3f41);
  }
  &__card {
    margin-bottom: 19px;
  }
  &__text {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 150% */
    color: #b3baba;
  }
}

.card-bonus-calculate {
  padding: 35px 30px;
  border: 1px solid var(--input-gray, #c4cccc);
  background: var(--1, #fff);
  @include mobile() {
    padding: 25px 20px 14px;
  }

  &__top {
    margin-bottom: 17px;
  }
  &__top-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--6, #6b6f6e);
  }
  &__top-amount {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 200% */
    color: var(--Black, #18243c);
  }
  &__slider {
    margin-bottom: 34px;

    --slider-handle-width: 19px;
    --slider-handle-height: 19px;
    --slider-connect-bg: #00a19c;
    --slider-handle-border: 3px solid #00a19c;
    --slider-handle-shadow: none;

    .slider-connects {
      background: #e3e5e5;
    }
  }
  &__bottom-title {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */
    color: var(--4, #3f3f41);
    @include mobile() {
      font-size: 20px;
    }
  }
  &__bottom-amount {
    margin-bottom: 7px;

    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 133.333% */
    color: var(--Black, #18243c);
    unicode-bidi: bidi-override;
  }
  &__bottom-text {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    color: #b3baba;
  }
}
</style>
