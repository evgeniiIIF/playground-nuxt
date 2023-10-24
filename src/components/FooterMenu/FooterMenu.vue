<script lang="ts" setup>
type Props = {
  title: string;
  items: { text: string; link: string }[];
};

defineProps<Props>();
</script>

<template>
  <div class="footer-menu">
    <h3 class="footer-menu__title">
      {{ title }}
    </h3>
    <ul class="footer-menu__list">
      <NuxtLink v-for="item in items" :key="item.text" class="footer-menu__item" :to="item.link">
        {{ item.text }}
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
