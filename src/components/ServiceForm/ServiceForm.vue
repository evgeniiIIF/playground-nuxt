<script lang="ts" setup>
import { useServicesAllStore } from '@/store/servicesAll';
import type { changedServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';
import type { ServiceForm } from '@/components/ServiceForm/ServiceForm.types';

const props = defineProps<ServiceForm>();

const { servicesAllActions } = useServicesAllStore();

const onChangeServiceHandler = (service: changedServicesAllItemChild) => {
  servicesAllActions.changeChooseService(service);
};

const name = ref('');
const phone = ref('');
const hasError = ref(false);

const errorNameInput = ref('');
const errorPhoneInput = ref('');
const errorDropdown = ref('');
const sendRequest = () => {
  errorNameInput.value = '';
  errorPhoneInput.value = '';
  errorDropdown.value = '';
  hasError.value = false;

  if (name.value.trim().length < 2) {
    errorNameInput.value = 'Имя должно состоять из 2 или больше символов';
    hasError.value = true;
  }

  if (name.value.match(/[0-9]/)) {
    errorNameInput.value = 'Имя не должно содержать цифры';
    hasError.value = true;
  }

  if (phone.value.trim().length < 18) {
    errorPhoneInput.value = 'Заполните поле полностью';
    hasError.value = true;
  }

  if (props.chooseServices.length < 1) {
    errorDropdown.value = 'Выберите 1 или больше услуг';
    hasError.value = true;
  }

  if (hasError.value) return;
};
</script>

<template>
  <section class="service-form">
    <div class="container">
      <h2 class="service-form__title">Записаться на сервис</h2>
      <form class="service-form__form" @submit.prevent="sendRequest">
        <div class="service-form__form-name">
          <UIInput v-model="name" type="text" title="Ваше имя" placeholder="Ваше имя" :error-message="errorNameInput" />
        </div>
        <div class="service-form__form-phone">
          <UIInput v-model="phone" type="phone" title="Ваш номер телефона" :error-message="errorPhoneInput" />
        </div>
        <div class="service-form__form-service">
          <UIDropdownWithAccordion
            title="Услуга"
            placeholder="Выберите услугу"
            :without-title-margin="true"
            :items="services"
            :checked-services="chooseServices"
            :error-message="errorDropdown"
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

<style lang="scss">
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
        margin-bottom: 16px;
      }

      @include mobile {
        max-width: inherit;
        margin-bottom: 16px;
      }
    }

    &-phone {
      width: 100%;
      max-width: 285px;

      @include tablet {
        max-width: inherit;
        margin-bottom: 16px;
      }

      @include mobile {
        max-width: inherit;
        margin-bottom: 16px;
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
