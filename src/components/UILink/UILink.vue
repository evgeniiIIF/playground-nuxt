<script lang="ts" setup>
import type {UILink} from "@/components/UILink/UILink.types";

defineProps<UILink>()
</script>

<template>
  <a v-if="type === 'a'" class="link" :class="{ 'link--color-white': color === 'white', 'link--color-blue': color === 'blue', 'link--color-black': color === 'black', 'link--font-small': fontSizeSmall, 'link--font-grow': fontGrow }" :href="link" target="_blank" rel="noopener">{{ text }}</a>
  <NuxtLink v-if="type === 'NuxtLink'" class="link" :class="{ 'link--color-white': color === 'white', 'link--color-blue': color === 'blue', 'link--color-black': color === 'black', 'link--font-small': fontSizeSmall, 'link--font-grow': fontGrow }" :to="link">{{ text }}</NuxtLink>
</template>

<style lang="scss">
  .link {
    @include text-main;
    color: $color-gray-dark;
    text-decoration: underline;

    &--color-white {
      color: $color-white;
    }

    &--color-blue {
      color: $color-blue;
    }

    &--color-black {
      color: $color-black-light;
    }

    &--font-small {
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    }

    &--font-grow {
      line-height: 500px;
    }
  }
</style>
