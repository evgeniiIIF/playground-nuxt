<script lang="ts" setup>
import type { UIDropdownEmits, UIDropdownTypes } from '@/components/UIDropdown/UIDropdown.types';
import { ref, computed } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside';

const props = defineProps<UIDropdownTypes>();
const emit = defineEmits<UIDropdownEmits>();

const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);
const DropdownNodeRef = ref<HTMLDivElement | null>(null);
const searchValue = ref('');

const filteredItems = computed(() =>
  props.items.filter((item) => item.toLowerCase().includes(searchValue.value.toLowerCase())),
);

const toggleHandler = () => {
  if (props.items.length === 0) return;
  toggleDropdown();
};

useClickOutside(DropdownNodeRef, closeDropdown);

const handleDropdownItemClick = (item: string) => {
  searchValue.value = '';
  closeDropdown();

  return item;
};
</script>

<template>
  <div ref="DropdownNodeRef" class="dropdown" :class="{ 'dropdown--opened': isOpenDropdown }">
    <label class="dropdown__label">
      <p class="dropdown__title">{{ title }}</p>
      <div class="dropdown__dropdown" @click="toggleHandler">
        <input
          class="dropdown__input"
          type="text"
          :placeholder="placeholder"
          :value="value"
          :disabled="props.items.length === 0"
          readOnly
        />
        <button type="button" class="dropdown__button">
          <span class="dropdown__button-arrow">
            <IcArrowDown :font-controlled="false" :filled="true" />
          </span>
        </button>
      </div>
    </label>
    <div class="dropdown__drop">
      <div class="dropdown__drop-search">
        <input v-model="searchValue" class="dropdown__drop-search-input" type="text" placeholder="Поиск" />
      </div>
      <ul class="dropdown__drop-list">
        <li
          v-for="item in filteredItems"
          :key="item"
          class="dropdown__drop-item"
          @click="emit('onSelectItem', handleDropdownItemClick(item))"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
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
    border: $fields-border;
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
    border: $fields-border;
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

      svg {
        @include fill-svg-and-path($color-second);
      }
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
        border: $fields-border-hover;
      }
    }

    &-list {
      max-height: 280px;
      list-style-type: none;
      border: $fields-border-hover;
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
        border-bottom: 1px solid $color-light-gray-lighter;
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
        border-color: $color-gray-lighter;
        color: $color-main;

        &::placeholder {
          color: $color-main;
        }
      }

      &__button {
        border-color: $color-gray-lighter;

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
        border-color: $color-gray-lighter;

        &::placeholder {
          color: $color-gray;
        }
      }

      &__button {
        border-color: $color-gray-lighter;
      }
    }
  }
}
</style>
