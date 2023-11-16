<script lang="ts" setup>
import type { FooterMenu } from '@/components/FooterMenu/FooterMenu.types';

defineProps<FooterMenu>();
</script>

<template>
  <div class="footer-menu">
    <h3 class="footer-menu__title">
      {{ title }}
    </h3>
    <ul class="footer-menu__list">
      <NuxtLink v-for="item in items" :key="item.id" class="footer-menu__item" :to="item.link">
        {{ item.title }}
      </NuxtLink>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer-menu {
  &__title {
    margin-bottom: 16px;

    @include title-main-xxsmall-grow;
    color: $color-gray;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style-type: none;
  }

  &__item {
    @include text-main-grow;
    color: $color-white;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: $color-second;
    }
  }
}
</style>
