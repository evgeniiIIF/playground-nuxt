<script lang="ts" setup>
import { vMaska } from 'maska';
import type { UIInputEmits, UIInputTypes } from '@/components/UIInput/UIInput.types';

defineProps<UIInputTypes>();
defineEmits<UIInputEmits>();

const onInputHandler = (event: Event): string => {
  return (event.target as HTMLInputElement).value.replace(/\s+/g, ' ').trim();
};
</script>

<template>
  <div class="input" :class="{ 'input--disabled': disabled, 'input--error': errorMessage }">
    <label class="input__label">
      <span class="input__title">{{ title }}</span>
      <input
        v-if="type === 'phone'"
        v-maska
        class="input__input"
        :data-maska="'+7 (###) ###-##-##'"
        type="tel"
        :placeholder="($attrs.placeholder as string) ?? '+7 (___) __-__-__'"
        :value="modelValue"
        v-bind="$attrs"
        :disabled="disabled"
        @input="$emit('update:modelValue', onInputHandler($event))"
      />
      <input
        v-else
        class="input__input"
        :type="type"
        :value="modelValue"
        v-bind="$attrs"
        :disabled="disabled"
        @input="$emit('update:modelValue', onInputHandler($event))"
      />
      <span v-if="errorMessage" class="input__error">{{ errorMessage }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input {
  position: relative;

  &__title {
    margin-bottom: 4px;

    @include text-main-small;
    color: $color-gray-light;
  }

  &__input {
    display: block;
    width: 100%;
    padding: 14px 20px;
    border: $fields-border;

    @include text-main-grow;
    color: $color-main;
    outline: none;
    background-color: transparent;

    &::placeholder {
      color: $color-gray-light;
    }

    &:focus {
      border: $fields-border-hover;

      ~ .input__title {
        color: $color-main;
      }
    }
  }

  &__error {
    position: absolute;
    bottom: -16px;
    left: 2px;

    @include text-main-xxsmall;
    color: red;

    @include tablet {
      left: inherit;
      right: 0;
    }

    @include mobile {
      left: inherit;
      right: 0;
    }
  }

  &:hover {
    .input {
      &__title {
        color: $color-gray;
      }

      &__input {
        border: $fields-border-hover;
      }
    }
  }

  &--disabled {
    &__title {
      color: $color-gray-light;
    }

    &__input {
      border: $fields-border;
    }
  }

  &--error {
    .input {
      &__title {
        color: red;
      }

      &__input {
        border-color: red;
      }
    }
  }
}
</style>
