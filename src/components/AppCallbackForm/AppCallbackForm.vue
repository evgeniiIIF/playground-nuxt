<script lang="ts" setup>
import { validateNameInput } from '@/utils/validateNameInput/validateNameInput';
import { validatePhoneInput } from '@/utils/validatePhoneInput/validatePhoneInput';
import { leadsHttp } from '@/api/http/leadsHttp';
import type { LeadsResponse } from '@/api/http/leadsHttp/leadsHttp.types';
import AppLoader from '~/components/AppLoader/AppLoader.vue';

defineProps<{ title: string }>();

const name = ref('');
const phone = ref('');
const hasError = ref(false);
const formResponse = ref<LeadsResponse | null>(null);
const loading = ref(false);

const errorNameInput = ref('');
const errorPhoneInput = ref('');
const sendRequest = async () => {
  errorNameInput.value = validateNameInput(name.value);
  errorPhoneInput.value = validatePhoneInput(phone.value);

  if (errorNameInput.value || errorPhoneInput.value) {
    hasError.value = true;
    return;
  }

  const requestData = {
    form: 'callbackForm',
    name: name.value,
    phone: phone.value,
  } as const;

  loading.value = true;
  const { data } = await leadsHttp.postCallbackForm(requestData);
  formResponse.value = data.value;
  hasError.value = false;
  loading.value = false;

  name.value = '';
  phone.value = '';
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
</script>

<template>
  <div class="callback-form">
    <form v-if="!formResponse && !loading" class="callback-form__form" @submit.prevent="sendRequest">
      <h6 class="callback-form__title">{{ title }}</h6>
      <div class="callback-form__inputs">
        <div class="callback-form__input">
          <UIInput v-model="name" type="text" title="Ваше имя" placeholder="Ваше имя" :error-message="errorNameInput" />
        </div>
        <div class="callback-form__input">
          <UIInput v-model="phone" type="phone" title="Ваш номер телефона" :error-message="errorPhoneInput" />
        </div>
      </div>
      <div class="callback-form__button">
        <UIButton type="submit" text="Отправить" :is-filled="true" :has-full-width="true" />
      </div>
      <div class="callback-form__policy">* Отправляя форму, Вы соглашаетесь с политикой конфиденциальности</div>
    </form>
    <div v-else-if="loading" class="request-form__loader">
      <AppLoader />
    </div>
    <div v-else class="callback-form__message">
      <p class="callback-form__message-text">
        {{ formResponse?.success ? 'Ваша заявка успешно отправлена!' : formResponse?.error_message }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.callback-form {
  padding: 50px 100px 50px 100px;
  background: #fff;
  overflow-y: auto;

  @include tablet {
    height: 100%;
  }

  @include mobile {
    padding: 20px 16px;
    height: 100%;
  }

  &__title {
    margin-bottom: 8px;
    @include title-slug();
    color: $color-blue;
  }
  &__inputs {
    display: flex;
    gap: 20px;
    margin-bottom: 24px;
    @include mr(24px);

    @include tablet {
      flex-direction: column;
    }

    @include mobile {
      flex-direction: column;
    }
  }
  &__input {
    width: 100%;
  }
  &__button {
    max-width: 200px;
    margin-bottom: 8px;

    @include tablet {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
    }
  }
  &__policy {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px; /* 150% */
    color: #b3baba;
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
    margin: 50px 0;

    &-text {
      text-align: center;
      @include title-main-xxxsmall-grow;
    }
  }
}
</style>
