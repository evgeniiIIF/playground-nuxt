<template>
  <section class="about-guarantee">
    <AppContainer>
      <div class="about-guarantee__wrapper">
        <h2 class="about-guarantee__title">Гарантия качества</h2>
        <p class="about-guarantee__description">
          Каждый автотехцентр под брендом ABS-autoservice предоставляет 1 год гарантии на все устанавливаемые
          автозапчасти и работы. Свяжитесь с нашей службой контроля качества, если у Вас возникли вопросы
          по&nbsp;обслуживанию или запчастям
        </p>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss">
.about-guarantee {
  padding: 40px 0 60px 0;

  @include mobile {
    padding: 38px 0 50px 0;
  }

  &__wrapper {
    max-width: 590px;
  }

  &__title {
    margin-bottom: 16px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 2px;
      @include title-main-xxsmall-bold;
    }
  }

  &__description {
    @include text-main;
    color: $color-gray-dark;
  }
}
</style>
