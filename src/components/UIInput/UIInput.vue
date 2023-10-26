<script lang="ts" setup>
import { vMaska } from 'maska';
import type { UIInputEmits } from '~/components/UIInput/UIInput.types';

type Props = {
  title: string;
  modelValue: string;
  disabled: boolean;
  type: 'phone' | 'text';
};

defineProps<Props>();
defineEmits<UIInputEmits>();

const onInputHandler = (event: Event): string => {
  return (event.target as HTMLInputElement).value;
};
</script>

<template>
  <div class="input" :class="{ 'input--disabled': disabled }">
    <label class="input__label">
      <p class="input__title">{{ title }}</p>
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
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input {
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
}
</style>
