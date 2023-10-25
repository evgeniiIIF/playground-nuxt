<script lang="ts" setup>
import type { UIButtonTypes } from '~/components/UIButton/UIButton.types';

defineProps<UIButtonTypes>();
</script>

<template>
  <template v-if="link">
    <NuxtLink
      :to="link"
      class="button button--without-underscore"
      :class="{ 'button--filled': isFilled, 'button--disabled': disabled }"
      >{{ text }}</NuxtLink
    >
  </template>
  <template v-else>
    <button
      type="button"
      class="button"
      :class="{ 'button--filled': isFilled, 'button-disabled': disabled }"
      :disabled="disabled"
    >
      {{ text }}
    </button>
  </template>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 33px;
  border: 2px solid $color-second;
  font-size: 14px;
  line-height: 30px;
  color: $color-white;
  cursor: pointer;
  background-color: transparent;

  &--without-underscore {
    text-decoration: none;
  }

  &--filled {
    border: none;
    background-color: $color-second;
  }

  &--disabled {
    opacity: 0.5;
  }

  &:hover {
    border-color: #00aba5;
    background-color: #00aba5;
  }

  &:active {
    border-color: #00b5af;
    background-color: #00b5af;
  }
}
</style>
