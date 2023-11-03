<script lang="ts" setup>
const name = ref('');
const phone = ref('');
defineProps<{ title: string }>();
</script>

<template>
  <form class="callback-form">
    <h6 class="callback-form__title">{{ title }}</h6>
    <div class="callback-form__inputs">
      <div class="callback-form__input">
        <UIInput type="text" title="Ваше имя" placeholder="Ваше имя" :model-value="name" />
      </div>
      <div class="callback-form__input">
        <UIInput type="phone" title="Ваш номер телефона" :model-value="phone" />
      </div>
    </div>
    <div class="callback-form__button">
      <UIButton text="Отправить" :is-filled="true" :has-full-width="true" />
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
