<script setup lang="ts">
import { useHomeStore } from '@/store/home/home.hooks';
import { useAdvantagesStore } from '@/store/advantages';

const { homeState } = useHomeStore();
const { advantagesState } = useAdvantagesStore();
</script>

<template>
  <section class="car-service">
    <div class="container">
      <h1 class="car-service__title">{{ homeState.advantages }}</h1>
      <div class="car-service__row">
        <div v-for="item in advantagesState" :key="item.id" class="car-service__col">
          <div class="car-service__item item-car-service">
            <div class="item-car-service__image ibg">
              <NuxtPicture format="webp" :src="item.image_origin" loading="lazy" :alt="item.image_alt" />
            </div>
            <div class="item-car-service__text">{{ item.title }}</div>
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
