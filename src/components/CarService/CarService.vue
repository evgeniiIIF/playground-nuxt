<script setup lang="ts">
const CAR_SERVICE_CARDS = [
  { image: '/images/car-service1.png', text: '13 постов обслуживания' },
  { image: '/images/car-service2.png', text: '25 + лет на рынке' },
  { image: '/images/car-service3.png', text: '55 000 автозапчастей в наличии' },
  { image: '/images/car-service4.png', text: '5 000 довольных клиентов' },
];
</script>

<template>
  <section class="car-service">
    <div class="container">
      <h1 class="car-service__title">Автосервис ABS-AUTO</h1>
      <div class="car-service__row">
        <div v-for="item in CAR_SERVICE_CARDS" :key="item.text" class="car-service__col">
          <div class="car-service__item item-car-service">
            <div class="item-car-service__image ibg">
              <NuxtImg format="webp" :src="item.image" loading="lazy" />
            </div>
            <div class="item-car-service__text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.car-service {
  padding: 60px 0;

  &__title {
    margin-bottom: 20px;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 128% */
    color: var(--Black, #18243c);
  }
  &__row {
    @include u-row-flex(20px);
    @include mobile {
      @include u-row-flex(10px);
    }
  }
  &__col {
    @include u-col(20px);
    @include u-size(1, 4, 20px);

    @include tablet {
      @include u-size(2, 4, 20px);
    }
    @include mobile {
      @include u-col(10px);
      @include u-size(2, 4, 10px);
    }
  }

  &__item {
    height: 100%;
  }
}
.item-car-service {
  border: 1px solid var(--input-gray, #c4cccc);
  background: var(--1, #fff);

  &__image {
    padding-top: 64.2599278%;
    margin-bottom: 20px;
  }
  &__text {
    padding: 0 16px 40px 16px;
    color: var(--4, #3f3f41);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 125% */

    @include mobile {
      padding: 0 8px 16px 8px;
      font-size: 16px;
      line-height: 20px; /* 125% */
    }
  }
}
</style>
