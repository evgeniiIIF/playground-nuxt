<script lang="ts" setup>
import { useServicesAllStore } from '@/store/servicesAll';
import type { changedServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';
import type { ServiceForm } from '@/components/ServiceForm/ServiceForm.types';

defineProps<ServiceForm>();

const { servicesAllActions } = useServicesAllStore();

const onChangeServiceHandler = (service: changedServicesAllItemChild) => {
  servicesAllActions.changeChooseService(service);
};

const name = ref('');
const phone = ref('');
</script>

<template>
  <section class="service-form">
    <div class="container">
      <h2 class="service-form__title">Записаться на сервис</h2>
      <form class="service-form__form">
        <div class="service-form__form-name">
          <UIInput type="text" title="Ваше имя" placeholder="Ваше имя" :model-value="name" />
        </div>
        <div class="service-form__form-phone">
          <UIInput type="phone" title="Ваш номер телефона" :model-value="phone" />
        </div>
        <div class="service-form__form-service">
          <UIDropdownWithAccordion
            title="Услуга"
            placeholder="Выберите услугу"
            :items="services"
            :checked-services="chooseServices"
            @on-change-service="onChangeServiceHandler"
          />
        </div>
        <div class="service-form__form-button">
          <UIButton type="submit" text="Записаться" :is-filled="true" :size-large="true" />
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.service-form {
  padding: 60px 0 80px 0;
  background-color: $color-light-gray-light;

  @include mobile {
    padding: 38px 0 70px 0;
  }

  &__title {
    margin-bottom: 27px;

    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 8px;
      @include title-main-xxsmall-bold;
    }
  }

  &__form {
    display: flex;
    align-items: flex-end;
    gap: 20px;

    @include tablet {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    @include mobile {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    &-name {
      width: 100%;
      max-width: 285px;

      @include tablet {
        max-width: inherit;
        margin-bottom: 6px;
      }

      @include mobile {
        max-width: inherit;
        margin-bottom: 6px;
      }
    }

    &-phone {
      width: 100%;
      max-width: 285px;

      @include tablet {
        max-width: inherit;
        margin-bottom: 6px;
      }

      @include mobile {
        max-width: inherit;
        margin-bottom: 6px;
      }
    }

    &-service {
      width: 100%;
      max-width: 285px;

      @include tablet {
        max-width: inherit;
        margin-bottom: 30px;
      }

      @include mobile {
        max-width: inherit;
        margin-bottom: 30px;
      }
    }

    &-button {
      width: 100%;
      max-width: 285px;

      @include tablet {
        max-width: inherit;
      }

      @include mobile {
        max-width: inherit;
        margin-top: 30px;
      }
    }
  }
}
</style>
