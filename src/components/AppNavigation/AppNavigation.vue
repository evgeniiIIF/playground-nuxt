<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <RouterLink class="navigation__item-link" to="/offers">Акции</RouterLink>
      </li>
      <li class="navigation__item">
        <RouterLink class="navigation__item-link" to="/#">
          <span class="navigation__item-link-text">Услуги</span>
          <span class="navigation__item-link-arrow"></span>
        </RouterLink>
      </li>
      <li class="navigation__item">
        <RouterLink class="navigation__item-link" to="/bonus">Бонусная программа</RouterLink>
      </li>
      <li class="navigation__item">
        <RouterLink class="navigation__item-link" to="/about">О компании</RouterLink>
      </li>
      <li class="navigation__item">
        <RouterLink class="navigation__item-link" to="/contacts">Контакты</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    gap: 30px;
    list-style-type: none;
  }

  &__item {
    &-link {
      display: flex;
      align-items: center;
      gap: 5px;

      text-decoration: none;
      color: $color-white;

      &:hover {
        color: $color-second;

        .navigation__item-link-arrow {
          background: url('~/assets/icons/navigation-arrow-down-green.svg') no-repeat center;
        }
      }

      &:active {
        color: $color-second;
      }

      &-arrow {
        width: 20px;
        height: 20px;
        background: url('~/assets/icons/navigation-arrow-down.svg') no-repeat center;
      }
    }
  }
}
</style>
