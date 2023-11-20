<script lang="ts" setup>
import type { changedServicesAllItem } from '@/store/servicesAll/servicesAll.types';
import type { LeadsResponse } from '@/api/http/leadsHttp/leadsHttp.types';
import { useServicesAllStore } from '@/store/servicesAll';
import { useBooleanState } from '@/composables/useBooleanState';
import { validateNameInput } from '@/utils/validateNameInput/validateNameInput';
import { validatePhoneInput } from '@/utils/validatePhoneInput/validatePhoneInput';
import { validateServicesDropdown } from '@/utils/validateServicesDropdown/validateServicesDropdown';
import { leadsHttp } from '@/api/http/leadsHttp';

const { servicesAllState, servicesAllEffects, servicesAllActions } = useServicesAllStore();
const [isOpenModal, openModal, closeModal] = useBooleanState(false);

await useAsyncData('serviceForm', async () => {
  await Promise.all([servicesAllState.value.servicesAllItems.length === 0 && servicesAllEffects.fetchServicesAll()]);
});

const services = servicesAllState.value.servicesAllItems;
const chooseServices = ref(servicesAllState.value.chooseServices);

watchEffect(() => {
  chooseServices.value = servicesAllState.value.chooseServices;
});

const onChangeServiceHandler = (service: changedServicesAllItem) => {
  servicesAllActions.changeChooseService(service);
};

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
  errorServices.value = validateServicesDropdown(chooseServices.value);

  if (errorNameInput.value || errorPhoneInput.value || errorServices.value) {
    hasError.value = true;
    return;
  }

  const requestData = {
    form: 'shortServiceForm',
    name: name.value,
    phone: phone.value,
    services_list: chooseServices.value.map((service) => service.title).join(', '),
  } as const;

  loading.value = true;
  const { data } = await leadsHttp.postServiceForm(requestData);
  formResponse.value = data.value;
  hasError.value = false;
  loading.value = false;

  if (formResponse.value) {
    openModal();
  }

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
  () => [chooseServices.value.length, hasError.value],
  () => {
    if (hasError.value) {
      errorServices.value = validateServicesDropdown(chooseServices.value);
    }
  },
);
</script>

<template>
  <section class="service-form">
    <div class="container">
      <h2 class="service-form__title">Записаться на сервис</h2>
      <form class="service-form__form" @submit.prevent="sendRequest">
        <div class="service-form__form-name">
          <UIInput v-model="name" type="text" title="Ваше имя" placeholder="Ваше имя" :error-message="errorNameInput" :disabled="loading" />
        </div>
        <div class="service-form__form-phone">
          <UIInput v-model="phone" type="phone" title="Ваш номер телефона" :error-message="errorPhoneInput" :disabled="loading"/>
        </div>
        <div class="service-form__form-service">
          <UIDropdownWithAccordion
            title="Услуга"
            placeholder="Выберите услугу"
            :without-title-margin="true"
            :items="services"
            :checked-services="chooseServices"
            :error-message="errorServices"
            :disabled="!services.length || loading"
            @on-change-service="onChangeServiceHandler"
          />
        </div>
        <div class="service-form__form-button">
          <UIButton type="submit" text="Записаться" :is-filled="true" :size-large="true" :with-loader="loading" />
        </div>
      </form>
    </div>
    <div class="service-form__modal">
      <LazyUIModal position="center" :is-open="isOpenModal" @on-close="closeModal">
        <div class="service-form__message">
          <p class="request-form__message-text">
            {{ formResponse?.success ? 'Ваша заявка успешно отправлена!' : formResponse?.error_message }}
          </p>
        </div>
      </LazyUIModal>
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
      }
    }
  }

  &__message {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    background-color: $color-white;

    @include tablet {
      height: 100%;
    }

    @include mobile {
      padding: 70px 16px;
      height: 100%;
    }

    &-text {
      @include title-main-xxxsmall-grow;
    }
  }
}
</style>
