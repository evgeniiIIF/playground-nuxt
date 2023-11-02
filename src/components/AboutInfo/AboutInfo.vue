<script setup lang="ts"></script>

<template>
  <section class="about-info">
    <div class="container">
      <div class="about-info__wrapper">
        <h2 class="about-info__title">ABS-autoservice</h2>
        <p class="about-info__description">
          Это федеральная сеть автосервисов полного цикла, осуществляющая ремонт и обслуживание иномарок любой сложности
          по&nbsp;выгодным ценам. Мы нацелены на премиальное обслуживание наших клиентов, отношения с которыми в
          дальнейшем перерастет в&nbsp;долгосрочное сотрудничество. Наша команда – это специалисты, являющиеся
          экспертами в&nbsp;своей области, способные выявить и оперативно устранить даже чрезвычайно сложные, скрытые,
          непредвиденные повреждения и неисправности.
        </p>
        <div class="about-info__link">
          <UILink type="NuxtLink" text="перейти в контакты" link="/contacts" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.about-info {
  padding: 60px 0 75px 0;
  background-color: $color-black-lighter;

  @include mobile {
    padding: 38px 0 50px 0;
  }

  &__wrapper {
    max-width: 490px;
  }

  &__title {
    margin-bottom: 16px;
    @include title-main-bold;
    color: $color-white;

    @include mobile {
      margin-bottom: 12px;
      @include title-main-xxsmall-bold;
    }
  }

  &__description {
    margin-bottom: 20px;
    @include text-main;
    color: $color-white-light;

    @include mobile {
      @include text-main-grow;
    }
  }

  &__link {
    @include text-main;
    color: $color-gray;
    text-decoration: underline;
  }
}
</style>
