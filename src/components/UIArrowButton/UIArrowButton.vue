<script lang="ts" setup>
import type { UIArrowButtonTypes } from '@/components/UIArrowButton/UIArrowButton.types';

defineProps<UIArrowButtonTypes>();
</script>

<template>
  <button class="arrow-button" :class="classForSwiper" type="button" :disabled="disabled">
    <IcArrowButtonLeft v-if="arrowDirection === 'left'" :font-controlled="false" :filled="true" />
    <IcArrowButtonRight v-else-if="arrowDirection === 'right'" :font-controlled="false" :filled="true" />
  </button>
</template>

<style lang="scss" scoped>
.arrow-button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: $button-border;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  &:hover {
    border: $button-border-hover;
  }

  &:active {
    border: $button-border-active;
  }

  &:focus-visible {
    border: $button-border-active;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
