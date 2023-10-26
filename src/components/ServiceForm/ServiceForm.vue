<script lang="ts" setup>
const mockedAccordionData = [
  'Bmw', 'Audi'
];
</script>

<template>
  <section class="service-form">
    <AppContainer>
      <h2 class="service-form__title">Записаться на сервис</h2>
      <form class="service-form__form" @click="$event.preventDefault()">
        <div class="service-form__form-name">
          <UIInput type="text" title="Ваше имя" placeholder="Ваше имя"/>
        </div>
        <div class="service-form__form-phone">
          <UIInput type="phone" title="Ваш номер телефона" />
        </div>
        <div class="service-form__form-service">
          <UIDropdown title="Услуга" placeholder="Выберите услугу" :items="mockedAccordionData"/>
        </div>
        <div class="service-form__form-button">
          <UIButton type="submit" text="Записаться" is-filled="true" :size-large="true"/>
        </div>
      </form>
    </AppContainer>
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

