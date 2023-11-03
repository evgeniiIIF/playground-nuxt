<script lang="ts" setup>
defineProps<{ title: string }>();

const name = ref('');
const phone = ref('');
const hasError = ref(false);

const errorNameInput = ref('');
const errorPhoneInput = ref('');
const sendRequest = () => {
  errorNameInput.value = '';
  errorPhoneInput.value = '';
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

  if (hasError.value) return;
};
</script>

<template>
  <form class="callback-form" @submit.prevent="sendRequest">
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
</template>

<style lang="scss">
.callback-form {
  padding: 50px 100px 50px 100px;
  background: #fff;

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
}
</style>
