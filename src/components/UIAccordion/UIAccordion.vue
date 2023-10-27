<script setup lang="ts">
import { ref } from 'vue';
import type { UIAccordionTypes } from '@/components/UIAccordion/UIAccordion.types';

defineProps<UIAccordionTypes>();

const isOpen = ref(false);
</script>

<template>
  <div class="accordion" :class="{ 'accordion--opened': isOpen }">
    <div class="accordion__accordion" @click="isOpen = !isOpen">
      <span class="accordion__text">{{ title }}</span>
    </div>
    <div class="accordion__drop">
      <ul class="accordion__list">
        <li class="accordion__item">
          <UIService :price="1500" name="Защита кузова" />
        </li>
        <li class="accordion__item">
          <UIService :price="1500" name="Защита кузова" />
        </li>
        <li class="accordion__item">
          <UIService :price="1500" name="Защита кузова" />
        </li>
        <li class="accordion__item">
          <UIService :price="1500" name="Защита кузова" />
        </li>
        <li class="accordion__item">
          <UIService :price="1500" name="Защита кузова" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;

  &__accordion {
    position: relative;
    padding: 14px 20px 14px 36px;

    font-weight: 500;
    cursor: pointer;
    background-color: rgba(240, 242, 242);

    &::before {
      position: absolute;
      top: 25px;
      left: 8px;
      width: 24px;
      height: 24px;
      content: '';
      transform: translateY(-50%);
      background: url('~/assets/icons/arrow-down.svg') no-repeat center;
      transition: transform 0.2s ease;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #e3e5e5;
    }
  }

  &__drop {
    max-height: 0px;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  &__list {
    height: 100%;
    list-style-type: none;
  }

  &__item {
    padding: 0 14px 0 20px;
    background-color: $color-white;

    &:not(:last-child) {
      border-bottom: 2px solid #f0f0f5;
    }
  }

  &--opened {
    .accordion {
      &__accordion {
        &::before {
          transform: translateY(-50%) rotate(-180deg);
        }
      }

      &__drop {
        max-height: 550px;
      }
    }
  }
}
</style>
