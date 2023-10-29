<script setup lang="ts">
</script>

<template>
  <section class="service-component">
    <AppContainer>
      <div class="service-component__service-path">
        <NuxtLink class="service-component__service-path-home" to="/">Главная</NuxtLink>
        <span class="service-component__service-path-arrow">
          <IcArrowRight :font-controlled="false" :filled="true"/>
        </span>
        <span class="service-component__service-path-text">Диагностика системы кондиционирования</span>
      </div>
      <div class="service-component__service">
        <div class="service-component__service-info">
          <h1 class="service-component__service-title">Диагностика системы кондиционирования</h1>
          <div class="service-component__service-price">
            <span class="service-component__service-price-icon">
              <IcPriceTag :font-controlled="false" :filled="true"/>
            </span>
            <span class="service-component__service-price-text">от 1400 ₽</span>
          </div>
          <p class="service-component__service-description">Кондиционер служит для регулирования температуры, циркуляции и очищения воздуха в салоне автомобиля. Вместе с воздухом в салон автомобиля проникают бактерии, неприятный газ, угарный газ и другие негативные добавки.</p>
          <div class="service-component__service-bonus-program">
            <span class="service-component__service-bonus-program-icon">
              <IcCard :font-controlled="false" :filled="true"/>
            </span>
            <span class="service-component__service-bonus-program-text">Услуга участвует в бонусной программе</span>
          </div>
          <UIButton text="Записаться" :is-filled="true"/>
        </div>
        <div class="service-component__service-image">
          <NuxtImg src="/service-1.jpg" fit="contain" loading="lazy"/>
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.service-component {
  position: relative;
  padding: 65px 0 60px 0;

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 1200px;
    width: 100%;
    height: 1px;
    transform: translateX(-50%);
    background-color: #f0f0f5;
    content: "";
  }

  &__service {
    display: flex;
    justify-content: space-between;

    &-path {
      display: flex;
      align-items: center;
      gap: 2px;
      margin-bottom: 35px;

      &-home {
        @include text-main;
        color: $color-black-light;
        text-decoration: underline;
      }

      &-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-text {
        @include text-main;
        color: $color-gray-dark;
      }
    }

    &-info {
      max-width: 490px;
    }

    &-title {
      margin-bottom: 20px;
      @include title-main-large-bold;
      color: $color-blue;
    }

    &-price {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-bottom: 20px;

      &-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &-text {
        @include button-text;
        color: $color-second;
      }
    }

    &-description {
      margin-bottom: 20px;
    }

    &-bonus-program {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 30px;

      &-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-text {
        @include text-main;
        color: $color-main;
      }
    }

    &-image {
      width: 100%;
      max-width: 590px;

      img {
        width: 100%;
      }
    }
  }
}
</style>

