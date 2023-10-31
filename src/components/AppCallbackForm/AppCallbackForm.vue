<script lang="ts" setup>
const name = ref('');
const phone = ref('');
</script>
<template>
  <form class="callback-form">
    <h6 class="callback-form__title">Обратный звонок</h6>
    <div class="callback-form__inputs">
      <div class="callback-form__input">
        <UIInput type="text" title="Ваше имя" placeholder="Ваше имя" :model-value="name" />
      </div>
      <div class="callback-form__input">
        <UIInput type="phone" title="Ваш номер телефона" :model-value="phone" />
      </div>
    </div>
    <div class="callback-form__button">
      <UIButton text="Отправить" />
    </div>
    <div class="callback-form__policy">* Отправляя форму, Вы соглашаетесь с политикой конфиденциальности</div>
  </form>
</template>
<style lang="scss">
.callback-form {
  padding: 50px 100px 50px 100px;
  background: #fff;

  &__title {
    margin-bottom: 8px;
    @include title-slug();
    color: $color-blue;
  }
  &__inputs {
    display: flex;
    margin-bottom: 24px;
    @include mr(24px);
  }
  &__input {
  }
  &__button {
    margin-bottom: 8px;
    .button {
      background: #00a19c;
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
