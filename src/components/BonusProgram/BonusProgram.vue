<script setup lang="ts"></script>

<template>
  <section class="bonus-program">
    <AppContainer>
      <div class="bonus-program__wrapper">
        <div class="bonus-program__info">
          <h2 class="bonus-program__title">Бонусная программа</h2>
          <p class="bonus-program__tagline">выгода с ABS-autoservice – это просто</p>
          <p class="bonus-program__description">
            Оплачивайте бонусами 30% от общей суммы чека или заказ-наряда. При&nbsp;покупке автозапчастей или заказе
            услуг в нашем автотехцентре Вам возвращается 10% на&nbsp;бонусную карту.
          </p>
          <UIButton text="Получить карту" :link="'#'" />
        </div>
        <div class="bonus-program__cards">
          <img class="bonus-program__cards-img" src="~/assets/img/bonus-cards.png" alt="bonus-card" />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.bonus-program {
  background: #141c1c;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 0;

    @include mobile {
      padding: 38px 0 50px 0;
      align-items: inherit;
    }
  }

  &__title {
    margin-bottom: 16px;

    @include title-main-bold;
    color: $color-white;

    @include mobile {
      margin-bottom: 2px;

      @include title-main-xxsmall-bold;
    }
  }

  &__tagline {
    margin-bottom: 20px;

    @include text-main;
    color: $color-white;
  }

  &__description {
    max-width: 488px;
    margin-bottom: 35px;

    @include text-main;
    color: $color-white;

    @include mobile {
      max-width: inherit;
      margin-bottom: 30px;
    }
  }

  &__cards {
    display: flex;
    margin-right: 45px;

    @include media-range($desktop-form, $screen-medium-min) {
      margin-right: 0;
    }

    @include mobile {
      display: none;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
