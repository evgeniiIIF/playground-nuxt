<script setup lang="ts">
import type { UIServiceEmits, UIServiceTypes } from '@/components/UIService/UIService.types';

defineProps<UIServiceTypes>();

const emit = defineEmits<UIServiceEmits>();
</script>

<template>
  <div class="service">
    <label class="service__label">
      <input class="service__input" type="checkbox" :checked="checked" @input="emit('onChecked', $event, name)" />
      <span class="service__name">{{ name }}</span>
    </label>
    <div class="service__controls">
      <span class="service__price" :class="{ 'service__price--hidden-on-mobile': priceIsHiddenOnMobile }"
        >{{ price }} ₽</span
      >
      <button v-if="withCrossButton" type="button" class="service__button" @click="emit('onRemove', name)">
        <IcCross :font-controlled="false" :filled="true" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  &__label {
    position: relative;
    cursor: pointer;
  }

  &__input {
    position: absolute;
    outline: none;
    appearance: none;

    &:checked + .service {
      &__name {
        &::before {
          background: url('~/assets/icons/checkbox-checked.svg') no-repeat center;
        }
      }
    }
  }

  &__name {
    display: inline-block;
    margin-left: 34px;

    @include text-main-grow;
    color: $color-main;

    @include mobile {
      @include text-main-small-grow;
    }

    &::before {
      position: absolute;
      top: -2px;
      left: 0;
      width: 24px;
      height: 24px;
      content: '';
      background: url('~/assets/icons/checkbox.svg');
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__price {
    @include text-main-grow;
    color: $color-gray;

    &--hidden-on-mobile {
      @include mobile {
        display: none;
      }
    }
  }

  &__button {
    width: 24px;
    height: 24px;
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
  }
}
</style>
