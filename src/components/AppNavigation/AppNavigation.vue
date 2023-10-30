<script lang="ts" setup></script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <NuxtLink class="navigation__item-link" active-class="navigation__item-link--active" to="/offers"
          >Акции</NuxtLink
        >
      </li>
      <li class="navigation__item">
        <NuxtLink class="navigation__item-link" to="/#">
          <span class="navigation__item-link-text">Услуги</span>
          <span class="navigation__item-link-arrow"></span>
        </NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink class="navigation__item-link" to="/#">Бонусная программа</NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink class="navigation__item-link" to="/#">О компании</NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink class="navigation__item-link" to="/#">Контакты</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
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
      transition: all 0.2s ease;

      &:hover {
        color: $color-second;

        .navigation__item-link-arrow {
          background: url('~/assets/icons/navigation-arrow-down-green.svg') no-repeat center;
        }
      }

      &:focus-visible {
        color: $color-second;

        .navigation__item-link-arrow {
          background: url('~/assets/icons/navigation-arrow-down-green.svg') no-repeat center;
        }
      }

      &-arrow {
        width: 20px;
        height: 20px;
        background: url('~/assets/icons/navigation-arrow-down.svg') no-repeat center;
      }
    }
  }
}

.navigation .navigation__item-link.navigation__item-link--active {
  color: $color-second;
}
</style>
