<script setup lang="ts">
import type { UIServiceEmits, UIServiceTypes } from '@/components/UIService/UIService.types';

defineProps<UIServiceTypes>();
const emit = defineEmits<UIServiceEmits>();
</script>

<template>
  <div class="service" :class="{ 'service--with-checkbox': withCheckbox, 'service--with-small-padding': withSmallPadding }">
    <label v-if="withCheckbox" class="service__label">
      <input
        class="service__input"
        type="checkbox"
        :checked="checked"
        @input="emit('onChange', { ...service, checked: !checked })"
      />
      <span class="service__name">{{ service.title }}</span>
    </label>
    <p v-else class="service__name">{{ service.title }}</p>
    <div class="service__controls">
      <span class="service__price" :class="{ 'service__price--hidden-on-mobile': priceIsHiddenOnMobile }"
        >{{ service.price }}&nbsp;₽</span
      >
      <button
        v-if="withCrossButton"
        type="button"
        class="service__button"
        @click="emit('onRemove', { ...service, checked: false })"
      >
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

  &--with-small-padding {
    padding: 2px 0;
  }

  &--with-checkbox {
    .service {
      &__input {
        position: absolute;
        outline: none;
        appearance: none;

        &:checked + .service {
          &__name {
            &::before {
              background: url('@/assets/icons/checkbox-checked.svg') no-repeat center;
            }
          }
        }
      }

      &__name {
        margin-left: 34px;

        &::before {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          content: '';
          background: url('@/assets/icons/checkbox.svg');
        }
      }
    }
  }

  &__name {
    display: inline-block;

    @include text-main-grow;
    color: $color-main;

    @include mobile {
      @include text-main-small-grow;
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
