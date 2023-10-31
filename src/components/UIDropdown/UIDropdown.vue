<script lang="ts" setup>
import type { UIDropdownTypes } from '@/components/UIDropdown/UIDropdown.types';
import { ref, computed } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside';

const props = defineProps<UIDropdownTypes>();

const mockedAccordionData = [
  { name: 'Кузовной ремонт', price: 1500 },
  { name: 'Кузовной ремонт', price: 1500 },
  { name: 'Кузовной ремонт', price: 1500 },
  { name: 'Кузовной ремонт', price: 1500 },
  { name: 'Кузовной ремонт', price: 1500 },
  { name: 'Кузовной ремонт', price: 1500 },
];

const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);

const dropdownValue = ref('');
const searchValue = ref('');

const open = () => {
  if (props.items.length === 0) return;
  toggleDropdown();
};

const DropdownNodeRef = ref<HTMLDivElement | null>(null);

useClickOutside(DropdownNodeRef, closeDropdown);

const handleDropdownItemClick = (event: MouseEvent) => {
  if (!(event.target instanceof HTMLElement)) return;
  dropdownValue.value = event.target!.textContent as string;
  closeDropdown();
};

const filteredItems = computed(() =>
  props.items.filter((item) => item.toLowerCase().includes(searchValue.value.toLowerCase())),
);
</script>

<template>
  <div ref="DropdownNodeRef" class="dropdown" :class="{ 'dropdown--opened': isOpenDropdown }">
    <label class="dropdown__label">
      <p class="dropdown__title">{{ title }}</p>
      <div class="dropdown__dropdown" @click="open">
        <input
          v-model="dropdownValue"
          class="dropdown__input"
          type="text"
          :placeholder="placeholder"
          readOnly
          :disabled="props.items.length === 0"
        />
        <button type="button" class="dropdown__button">
          <span class="dropdown__button-arrow">
            <IcArrowDown :font-controlled="false" :filled="true" />
          </span>
        </button>
      </div>
    </label>
    <div class="dropdown__drop" :class="{ 'dropdown__drop--with-accordion': withAccordion }">
      <div class="dropdown__drop-search">
        <input v-model="searchValue" class="dropdown__drop-search-input" type="text" placeholder="Поиск" />
      </div>
      <ul class="dropdown__drop-list">
        <li v-if="withAccordion" class="dropdown__drop-accordion">
          <UIAccordion :title="'Кузовной ремонт'" :items="mockedAccordionData" />
        </li>
        <template v-else>
          <li v-for="item in filteredItems" :key="item" class="dropdown__drop-item" @click="handleDropdownItemClick">
            {{ item }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  &__label {
    cursor: pointer;
  }

  &__title {
    margin-left: 10px;
    margin-bottom: 4px;

    @include text-main-small;
    color: $color-gray-light;

    @include mobile {
      margin-left: 0;
    }
  }

  &__dropdown {
    display: flex;
    align-items: center;
  }

  &__input {
    width: 100%;
    padding: 14px 20px;
    border: 1px solid #e3e5e5;
    border-right: 0;
    outline: none;
    background-color: transparent;

    @include text-main-grow;
    color: $color-main;
    cursor: pointer;

    &::placeholder {
      color: $color-gray-light;
    }
  }

  &__button {
    background: none;
    border: 1px solid #e3e5e5;
    padding: 12px 15px;
    outline: none;
    cursor: pointer;

    &-arrow {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.2s ease;
      color: $color-second;
    }
  }

  &__drop {
    display: none;
    position: absolute;
    top: 83px;
    left: 0;
    width: 100%;
    max-height: 330px;
    z-index: 1;
    animation: open 0.2s ease-in-out;

    @keyframes open {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &--with-accordion {
      width: 560px;

      @include tablet {
        width: 100%;
      }

      @include mobile {
        width: 100%;
      }
    }

    &-search {
      position: relative;

      &::after {
        position: absolute;
        top: 50%;
        right: 20px;
        width: 24px;
        height: 24px;
        transform: translate(50%, -50%);
        content: '';
        background: url('@/assets/icons/search.svg');
      }

      &-input {
        width: 100%;
        padding: 15px 34px 15px 20px;
        outline: none;
        border: 1px solid #a7b0b0;
      }
    }

    &-list {
      max-height: 280px;
      list-style-type: none;
      border: 1px solid #a7b0b0;
      border-top: 0;
      overflow-y: auto;

      @include scrollbar-y;
    }

    &-item {
      padding: 14px 20px;

      font-weight: 500;
      cursor: pointer;
      background-color: $color-white;

      &:not(:last-child) {
        border-bottom: 1px solid #f0f0f5;
      }

      &:hover {
        background-color: rgba(240, 242, 242);
      }
    }
  }

  &--opened {
    .dropdown {
      &__title {
        color: $color-main;
      }

      &__input {
        border-color: #a7b0b0;
        color: $color-main;

        &::placeholder {
          color: $color-main;
        }
      }

      &__button {
        border-color: #a7b0b0;

        &-arrow {
          transform: rotate(180deg);
        }
      }

      &__drop {
        display: block;
      }
    }
  }

  &:hover {
    .dropdown {
      &__title {
        color: $color-gray;
      }

      &__input {
        border-color: #a7b0b0;

        &::placeholder {
          color: $color-gray;
        }
      }

      &__button {
        border-color: #a7b0b0;
      }
    }
  }
}
</style>
