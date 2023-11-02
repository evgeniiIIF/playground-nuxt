<script setup lang="ts"></script>

<template>
  <section class="about-certificates">
    <div class="container">
      <div class="about-certificates__wrapper">
        <h2 class="about-certificates__title">Сертификаты</h2>
        <p class="about-certificates__subtitle">Аккредитация от мировых производителей</p>
        <ul class="about-certificates__certificates">
          <li v-for="certificate in 4" :key="certificate" class="about-certificates__certificate">
            <NuxtImg class="about-certificates__certificate-image" src="/gray-background.png" alt="certificate" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.about-certificates {
  position: relative;
  padding: 60px 0 80px 0;

  @include mobile {
    padding: 58px 0 28px 0;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 1200px;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    background-color: $color-light-gray-lighter;
    content: '';
  }

  &__title {
    margin-bottom: 6px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 2px;
      @include title-main-xxsmall-bold;
    }
  }

  &__subtitle {
    margin-bottom: 35px;
    @include text-main;
    color: $color-gray-dark;

    @include mobile {
      margin-bottom: 25px;
    }
  }

  &__certificates {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    list-style-type: none;

    @include mobile {
      padding-bottom: 20px;
      flex-wrap: nowrap;
      justify-content: inherit;
      overflow-x: auto;

      @include scrollbar-x;
    }
  }

  &__certificate {
    width: 100%;
    height: 100%;
    max-width: 285px;
    max-height: 340px;
    min-width: 135px;
    min-height: 140px;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
