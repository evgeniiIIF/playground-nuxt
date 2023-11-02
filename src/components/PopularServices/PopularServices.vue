<script setup lang="ts"></script>

<template>
  <section class="popular-services">
    <div class="container">
      <h2 class="popular-services__title">Популярные услуги</h2>
      <ul class="popular-services__list">
        <li class="popular-services__item">
          <NuxtLink class="popular-services__service-card" to="#">
            <h3 class="popular-services__service-card-title">Замена технических жидкостей</h3>
            <div class="popular-services__service-card-body">
              <span class="popular-services__service-card-price">от 2 300 ₽</span>
              <span class="popular-services__service-card-arrow-button">
                <IcCircleArrowButton :font-controlled="false" :filled="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
        <li class="popular-services__item">
          <NuxtLink class="popular-services__service-card" to="#">
            <h3 class="popular-services__service-card-title">Замена технических жидкостей</h3>
            <div class="popular-services__service-card-body">
              <span class="popular-services__service-card-price">от 2 300 ₽</span>
              <span class="popular-services__service-card-arrow-button">
                <IcCircleArrowButton :font-controlled="false" :filled="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
        <li class="popular-services__item">
          <NuxtLink class="popular-services__service-card" to="#">
            <h3 class="popular-services__service-card-title">Замена технических жидкостей</h3>
            <div class="popular-services__service-card-body">
              <span class="popular-services__service-card-price">от 2 300 ₽</span>
              <span class="popular-services__service-card-arrow-button">
                <IcCircleArrowButton :font-controlled="false" :filled="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
        <li class="popular-services__item">
          <NuxtLink class="popular-services__service-card" to="/#">
            <h3 class="popular-services__service-card-title">Замена технических жидкостей</h3>
            <div class="popular-services__service-card-body">
              <span class="popular-services__service-card-price">от 2 300 ₽</span>
              <span class="popular-services__service-card-arrow-button">
                <IcCircleArrowButton :font-controlled="false" :filled="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<style lang="scss">
.popular-services {
  padding: 60px 0;

  @include mobile {
    padding: 19px 0 60px 0;
  }

  &__title {
    margin-bottom: 41px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 15px;
      @include title-main-xxsmall-bold;
    }
  }

  &__list {
    display: flex;
    gap: 20px;
    list-style-type: none;

    @include tablet {
      flex-direction: column;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &__service-card {
    max-width: 285px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 27px 30px 24px 30px;
    border: $card-border;
    text-decoration: none;
    transition: all 0.3s ease;

    @include tablet {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
    }

    &-title {
      margin-bottom: 37px;
      @include text-main-xlarge-bold;
      color: $color-black-light;

      @include mobile {
        margin-bottom: 17px;
      }
    }

    &-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-price {
      @include text-main;
      color: $color-gray;
    }

    &:hover {
      background-color: $color-second;
      box-shadow: 0 5px 10px rgba(24, 36, 60, 0.15);
      transform: translateY(-10px);

      .popular-services__service-card {
        &-title {
          color: $color-white;
        }

        &-price {
          color: $color-white;
        }

        &-arrow-button {
          svg {
            rect {
              stroke: $color-white;
            }

            path {
              fill: $color-white;
            }
          }
        }
      }
    }
  }
}
</style>
