<script setup lang="ts">
import { useServicesAllStore } from '@/store/servicesAll';
import type { changedServicesAllItem } from '@/store/servicesAll/servicesAll.types';
import { useMediaSizes } from '@/composables/useMediaSizes';
import { computed } from 'vue';
import type { AppCalculationForm } from '@/components/AppCalculationForm/AppCalculationForm.types';
import { validateNameInput } from '@/utils/validateNameInput/validateNameInput';
import { validatePhoneInput } from '@/utils/validatePhoneInput/validatePhoneInput';
import { validateServicesDropdown } from '@/utils/validateServicesDropdown/validateServicesDropdown';
import { leadsHttp } from '@/api/http/leadsHttp';
import type { LeadsResponse } from '@/api/http/leadsHttp/leadsHttp.types';
import AppLoader from '~/components/AppLoader/AppLoader.vue';

const props = defineProps<AppCalculationForm>();

const { isLessThanDesktop } = useMediaSizes();
const { servicesAllActions } = useServicesAllStore();

const onRemoveServiceHandler = (service: changedServicesAllItem) => {
  servicesAllActions.changeChooseService(service);
};
const totalCost = computed(() => props.services.reduce((acc, service) => acc + service.price, 0));

const name = ref('');
const phone = ref('');
const hasError = ref(false);
const formResponse = ref<LeadsResponse | null>(null);
const loading = ref(false);

const errorNameInput = ref('');
const errorPhoneInput = ref('');
const errorServices = ref('');
const sendRequest = async () => {
  errorNameInput.value = validateNameInput(name.value);
  errorPhoneInput.value = validatePhoneInput(phone.value);
  errorServices.value = validateServicesDropdown(props.services);

  if (errorNameInput.value || errorPhoneInput.value || errorServices.value) {
    hasError.value = true;
    return;
  }

  const requestData = {
    form: 'fullServiceForm',
    name: name.value,
    phone: phone.value,
    car: `${props.carBrand} ${props.carModel}`,
    services_list: props.services.map((service) => service.title).join(', '),
  } as const;

  loading.value = true;
  const { data } = await leadsHttp.postCalculationForm(requestData);
  formResponse.value = data.value;
  hasError.value = false;
  loading.value = false;

  name.value = '';
  phone.value = '';
  servicesAllActions.clearChooseServices();
};

watch(
  () => [name.value, hasError.value],
  () => {
    if (hasError.value) {
      errorNameInput.value = validateNameInput(name.value);
    }
  },
);

watch(
  () => [phone.value, hasError.value],
  () => {
    if (hasError.value) {
      errorPhoneInput.value = validatePhoneInput(phone.value);
    }
  },
);

watch(
  () => [props.services.length, hasError.value],
  () => {
    if (hasError.value) {
      errorServices.value = validateServicesDropdown(props.services);
    }
  },
);
</script>

<template>
  <div class="request-form">
    <form v-if="!formResponse && !loading" class="request-form__form" @submit.prevent="sendRequest">
      <div class="request-form__header">
        <h4 class="request-form__title">Оставьте заявку</h4>
        <p class="request-form__description">введите ваше имя и номер телефона, а также проверьте ваш заказ</p>
      </div>
      <div class="request-form__body">
        <div class="request-form__user-info">
          <div class="request-form__user-name">
            <UIInput v-model="name" type="text" title="Имя" placeholder="Ваше имя" :error-message="errorNameInput" />
          </div>
          <div class="request-form__user-phone">
            <UIInput v-model="phone" type="phone" title="Телефон" :error-message="errorPhoneInput" />
          </div>
          <div v-if="!isLessThanDesktop" class="request-form__button">
            <UIButton type="submit" text="Записаться на сервис" :is-filled="true" />
          </div>
        </div>
        <div class="request-form__services" :class="{ 'request-form__services--error': errorServices }">
          <div class="request-form__services-header">
            <p class="request-form__services-auto">Автомобиль</p>
            <p class="request-form__services-auto-model">{{ carBrand }} {{ carModel }}</p>
            <p class="request-form__services-text">Выбранные услуги</p>
          </div>
          <div class="request-form__services-body">
            <ul v-if="services.length" class="request-form__services-list">
              <li v-for="service in services" :key="service.id" class="request-form__services-item">
                <UIService
                  :service="service"
                  :with-cross-button="true"
                  :with-small-padding="true"
                  @on-remove="onRemoveServiceHandler"
                />
              </li>
            </ul>
            <div v-else class="request-form__services-body-empty">
              <span class="request-form__services-body-empty-text">{{
                errorServices || 'Для расчета стоимости выберите услуги'
              }}</span>
            </div>
          </div>
          <div class="request-form__services-footer">
            <p class="request-form__services-cost-text">Итого:</p>
            <p class="request-form__services-cost-total">{{ totalCost }} ₽</p>
            <p class="request-form__services-footnote">
              * Указана примерная стоимость. Финальный расчет стоимости запчастей и работ рассчитывается индивидуально
            </p>
          </div>
        </div>
      </div>
      <div v-if="isLessThanDesktop" class="request-form__button">
        <UIButton type="submit" text="Записаться на сервис" :is-filled="true" :has-full-width="true" />
      </div>
    </form>
    <div v-else-if="loading" class="request-form__loader">
      <AppLoader />
    </div>
    <div v-else class="request-form__message">
      <p class="request-form__message-text">
        {{ formResponse?.success ? 'Ваша заявка успешно отправлена!' : formResponse?.error_message }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.request-form {
  padding: 50px 100px;
  background-color: $color-white;
  overflow-y: auto;

  @include tablet {
    height: 100%;
  }

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
    gap: 26px;

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
      margin-bottom: 16px;
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
      height: 200px;
      padding: 0 20px;
      border-top: $fields-border;
      border-bottom: $fields-border;
      overflow-y: auto;

      @include scrollbar-y;

      &-empty {
        height: 100%;
        display: flex;
        align-items: center;

        &-text {
          @include title-main-xxsmall-bold;
          color: $color-gray-dark;
        }
      }
    }

    &-list {
      list-style-type: none;
    }

    &-item {
      &:not(:last-child) {
        border-bottom: 2px solid $color-light-gray-lighter;
      }
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

    &--error {
      border-color: red;

      .request-form {
        &__services {
          &-text {
            color: red;
          }

          &-body {
            border-color: red;

            &-empty-text {
              color: red;
            }
          }
        }
      }
    }
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    height: 250px;

    @include tablet {
      height: 100%;
    }

    @include mobile {
      height: 100%;
    }
  }

  &__message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;

    @include tablet {
      height: 100%;
    }

    @include mobile {
      height: 100%;
    }

    &-text {
      text-align: center;
      @include title-main-xxxsmall-grow;
    }
  }
}
</style>
