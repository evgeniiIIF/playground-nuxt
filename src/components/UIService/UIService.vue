<script setup lang="ts">
import type { UIServiceEmits, UIServiceTypes } from '@/components/UIService/UIService.types';

defineProps<UIServiceTypes>();
const emit = defineEmits<UIServiceEmits>();
</script>

<template>
  <div class="service" :class="{ 'service--with-checkbox': withCheckbox }">
    <label v-if="withCheckbox" class="service__label">
      <input
        class="service__input"
        type="checkbox"
        :checked="service.checked"
        @input="emit('onChange', $event, service)"
      />
      <span class="service__name">{{ service.title }}</span>
    </label>
    <p v-else class="service__name">{{ service.title }}</p>
    <div class="service__controls">
      <span class="service__price" :class="{ 'service__price--hidden-on-mobile': priceIsHiddenOnMobile }"
        >{{ service.price }} ₽</span
      >
      <button v-if="withCrossButton" type="button" class="service__button" @click="emit('onRemove', service)">
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
          top: -2px;
          left: 0;
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
