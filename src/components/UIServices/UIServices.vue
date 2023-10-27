<script setup lang="ts">
import { computed, ref } from 'vue';
import type { UIServicesTypes } from '@/components/UIServices/UIServices.types';

const props = defineProps<UIServicesTypes>();

const changedItems = ref(
  props.items.map((item) => {
    return { ...item, checked: true };
  }),
);

const totalCost = computed(() =>
  changedItems.value.reduce((acc, item) => {
    if (!item.checked) return acc;

    return acc + item.price;
  }, 0),
);

const handleChecked = (event: Event, text: string): void => {
  if (!(event.target instanceof HTMLInputElement)) return;
  changedItems.value.find((item) => item.name === text)!.checked = event.target.checked;
};

const handleRemove = (text: string): void => {
  changedItems.value = changedItems.value.filter((item) => item.name !== text);
};
</script>

<template>
  <div class="services">
    <p class="services__title">Услуга</p>
    <div class="services__content">
      <div class="services__body">
        <ul class="services__list">
          <li v-for="{ name, price } in changedItems" :key="name" class="services__item">
            <UIService
              :name="name"
              :price="price"
              :with-cross-button="true"
              :checked="true"
              @on-checked="handleChecked"
              @on-remove="handleRemove"
            />
          </li>
        </ul>
      </div>
      <div class="services__footer">
        <div class="services__cost">
          <p class="services__cost-text">Итого:</p>
          <p class="services__cost-sum">{{ totalCost }} ₽</p>
        </div>
        <div class="services__button">
          <UIButton text="Записаться на сервис" :is-filled="true" />
        </div>
      </div>
    </div>
    <p class="services__footnote">
      * Указана примерная стоимость. Финальный расчет стоимости запчастей и работ рассчитывается индивидуально
    </p>
  </div>
</template>

<style lang="scss" scoped>
.services {
  &__title {
    margin-left: 10px;
    font-size: 12px;
    color: $color-gray-light;
  }

  &__content {
    margin-bottom: 13px;
    border: 1px solid #e3e5e5;
  }

  &__body {
    max-height: 250px;
    padding: 0 14px 0 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 100%;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $color-second;
    }

    &::-webkit-scrollbar-track {
      background-color: #f0f2f2;
    }
  }

  &__list {
    list-style-type: none;
  }

  &__item {
    &:not(:last-child) {
      border-bottom: 2px solid #f0f0f5;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px 18px 20px;
    border-top: 1px solid #e3e5e5;
  }

  &__cost {
    &-text {
      font-size: 12px;
      color: $color-gray-light;
    }

    &-sum {
      font-size: 30px;
      line-height: 30px;
      font-weight: 500;
    }
  }

  &__footnote {
    max-width: 590px;
    font-size: 12px;
    line-height: 15px;
    color: $color-gray-light;
  }
}
</style>
