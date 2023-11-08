<script lang="ts" setup>
import type { UIButtonTypes } from '@/components/UIButton/UIButton.types';

defineProps<UIButtonTypes>();
</script>

<template>
  <template v-if="link">
    <NuxtLink
      :to="link"
      class="button button--without-underscore"
      :class="{ 'button--filled': isFilled, 'button--disabled': disabled, 'button--size-large': sizeLarge }"
      >{{ text }}</NuxtLink
    >
  </template>
  <template v-else>
    <button
      :type="type || 'button'"
      class="button"
      :class="{
        'button--filled': isFilled,
        'button--disabled': disabled,
        'button--full-width': hasFullWidth,
        'button--size-large': sizeLarge,
      }"
      :disabled="disabled"
      @click="onClick"
    >
      {{ text }}
    </button>
  </template>
</template>

<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 33px;
  border: 2px solid $color-second;

  @include text-main-medium;
  color: $color-white;
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  transition: all 0.3s ease;

  &--full-width {
    width: 100%;
  }

  &--without-underscore {
    text-decoration: none;
  }

  &--filled {
    padding: 10px 33px;
    border: none;
    background-color: $color-second;
  }

  &--disabled {
    opacity: 0.5;
  }

  &--size-large {
    width: 100%;
    padding: 15px 33px;

    @include text-main-large-medium;

    @include mobile {
      padding: 10px 33px;
      @include text-main-medium;
    }
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
