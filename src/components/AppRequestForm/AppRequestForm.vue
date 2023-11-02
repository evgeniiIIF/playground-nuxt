<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import type { changedServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';
import { useMediaSizes } from '@/composables/useMediaSizes';

const name = ref('');
const phone = ref('');

const { smallerThanDesktop } = useMediaSizes();

const { servicesAllState, servicesAllActions } = useServicesAllStore();

const chooseServices = ref(servicesAllState.value.chooseServices);

watchEffect(() => {
  chooseServices.value = servicesAllState.value.chooseServices;
});

const onRemoveServiceHandler = (service: changedServicesAllItemChild) => {
  servicesAllActions.changeChooseService(service);
};
</script>

<template>
  <form class="request-form">
    <div class="request-form__header">
      <h4 class="request-form__title">Оставьте заявку</h4>
      <p class="request-form__description">введите ваше имя и номер телефона, а также проверьте ваш заказ</p>
    </div>
    <div class="request-form__body">
      <div class="request-form__user-info">
        <div class="request-form__user-name">
          <UIInput type="text" title="Имя" placeholder="Ваше имя" :model-value="name" />
        </div>
        <div class="request-form__user-phone">
          <UIInput type="phone" title="Телефон" :model-value="phone" />
        </div>
        <div v-if="!smallerThanDesktop" class="request-form__button">
          <UIButton type="submit" text="Записаться на сервис" :is-filled="true" />
        </div>
      </div>
      <div class="request-form__services">
        <div class="request-form__services-header">
          <p class="request-form__services-auto">Автомобиль</p>
          <p class="request-form__services-auto-model">Acura CL</p>
          <p class="request-form__services-text">Выбранные услуги</p>
        </div>
        <div class="request-form__services-body">
          <ul class="request-form__services-list">
            <li v-for="service in chooseServices" :key="service.id" class="request-form__services-item">
              <UIService :service="service" :with-cross-button="true" @on-remove="onRemoveServiceHandler" />
            </li>
          </ul>
        </div>
        <div class="request-form__services-footer">
          <p class="request-form__services-cost-text">Итого:</p>
          <p class="request-form__services-cost-total">38 500 Р</p>
          <p class="request-form__services-footnote">
            * Указана примерная стоимость. Финальный расчет стоимости запчастей и работ рассчитывается индивидуально
          </p>
        </div>
      </div>
    </div>
    <div v-if="smallerThanDesktop" class="request-form__button">
      <UIButton type="submit" text="Записаться на сервис" :is-filled="true" :has-full-width="true" />
    </div>
  </form>
</template>

<style lang="scss">
.request-form {
  padding: 50px 100px;
  background-color: $color-white;

  @include mobile {
    padding: 20px 16px;
    height: 100%;
  }

  &__header {
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 6px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      @include title-main-xxsmall-bold;
    }
  }

  &__description {
    @include text-main;
    color: $color-gray-dark;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @include tablet {
      flex-direction: column;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &__user {
    &-info {
      width: 100%;
      max-width: 280px;

      @include tablet {
        max-width: inherit;
      }

      @include mobile {
        max-width: inherit;
      }
    }

    &-name {
      margin-bottom: 10px;
    }
  }

  &__button {
    margin-top: 20px;
  }

  &__services {
    width: 100%;
    max-width: 400px;
    border: $fields-border;

    @include tablet {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
    }

    &-header {
      padding: 20px 20px 0 20px;
    }

    &-auto {
      @include text-main-small;
      color: $color-gray-light;

      &-model {
        @include text-main;
        color: $color-main;
        margin-bottom: 20px;
      }
    }

    &-text {
      @include text-main-small;
      color: $color-gray-light;
    }

    &-body {
      padding: 0 20px;
      border-top: $fields-border;
      border-bottom: $fields-border;
    }

    &-list {
      list-style-type: none;
    }

    &-footer {
      padding: 20px;
    }

    &-cost {
      &-text {
        margin-bottom: 2px;
        @include text-main-small;
        color: $color-gray-light;
      }

      &-total {
        margin-bottom: 5px;
        @include text-counter;
        color: $color-main;
      }
    }

    &-footnote {
      @include text-main-xsmall;
      color: $color-gray-light;

      @include mobile {
        @include text-main-xxsmall;
      }
    }
  }
}
</style>
