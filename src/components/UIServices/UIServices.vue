<script setup lang="ts">
import { computed } from 'vue';
import type { UIServices, UIServicesEmits } from '@/components/UIServices/UIServices.types';

const props = defineProps<UIServices>();
const emit = defineEmits<UIServicesEmits>();

const totalCost = computed(() => props.services.reduce((acc, service) => acc + service.price, 0));
</script>

<template>
  <div class="services">
    <p class="services__title">Услуга</p>
    <div class="services__content">
      <div class="services__body">
        <ul v-if="services.length" class="services__list">
          <li v-for="service in services" :key="service.id" class="services__item">
            <UIService
              :service="service"
              :with-cross-button="true"
              :price-is-hidden-on-mobile="true"
              @on-remove="(removedService) => emit('onRemoveService', removedService)"
            />
          </li>
        </ul>
        <div v-else class="services__body-empty">
          <span class="services__body-empty-text">Для расчета стоимости выберите</span>
          <span class="services__body-empty-text-highlighted">авто, модель и услуги</span>
        </div>
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
    <div class="services__button--mobile">
      <UIButton text="Записаться на сервис" :is-filled="true" :has-full-width="true" />
    </div>
  </div>
</template>

<style lang="scss">
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
    height: 250px;
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

    &-empty {
      min-height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &-text {
        @include title-main-bold;
        color: $color-gray-dark;

        &-highlighted {
          @include title-main-bold;
          color: $color-second;
        }
      }
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
      @include text-main-small;
      color: $color-gray-light;
    }

    &-sum {
      @include text-counter;
      color: $color-main;
    }
  }

  &__button {
    @include mobile {
      display: none;
    }

    &--mobile {
      display: none;

      @include mobile {
        display: block;
      }
    }
  }

  &__footnote {
    max-width: 590px;

    @include text-main-small;
    color: $color-gray-light;

    @include mobile {
      margin-bottom: 30px;

      @include text-main-xxsmall;
    }
  }
}
</style>
