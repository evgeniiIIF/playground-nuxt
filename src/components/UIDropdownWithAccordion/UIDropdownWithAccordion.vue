<script lang="ts" setup>
import { ref } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside';
import type {
  UIDropdownWithAccordion,
  UIDropdownWithAccordionEmits,
} from '@/components/UIDropdownWithAccordion/UIDropdownWithAccordion.types';
import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';
import { setChecked } from '@/utils/setChecked/setChecked';
import { flatServices } from '@/utils/flatServices/flatServices';

const props = defineProps<UIDropdownWithAccordion>();
const emit = defineEmits<UIDropdownWithAccordionEmits>();

const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);
const DropdownNodeRef = ref<HTMLDivElement | null>(null);
const searchValue = ref('');

const toggleHandler = () => {
  if (props.disabled) return;
  toggleDropdown();
};

useClickOutside(DropdownNodeRef, closeDropdown);

/* TODO */
/* По-хорошему надо написать рекурсию и фильтровать по id, а не по path  */
const checkedServicesCategory = (category: ServicesAllItem, checkedServices?: ServicesAllItem[]) => {
  return checkedServices?.filter((service) => service.full_path.split('>')[0] === category.full_path);
};

const allServices = props.items.map((item) => flatServices(item.children)).flat();

const filteredServices = computed(() => {
  return allServices.filter((service) => service.title.toLowerCase().includes(searchValue.value.toLowerCase()));
});

const setValue = (checkedServices?: ServicesAllItem[]) => {
  return checkedServices?.length ? `Выбрано ${checkedServices.length} услуг` : '';
};
</script>

<template>
  <div
    ref="DropdownNodeRef"
    class="dropdown-accordion"
    :class="{ 'dropdown-accordion--opened': isOpenDropdown, 'dropdown-accordion--error': errorMessage }"
  >
    <label class="dropdown-accordion__label">
      <span
        class="dropdown-accordion__title"
        :class="{ 'dropdown-accordion__title--without-margin': withoutTitleMargin }"
        >{{ title }}</span
      >
      <div class="dropdown-accordion__dropdown" @click="toggleHandler">
        <input
          class="dropdown-accordion__input"
          type="text"
          :placeholder="placeholder"
          :value="setValue(checkedServices)"
          readOnly
          :disabled="disabled"
        />
        <button type="button" class="dropdown-accordion__button" :disabled="disabled">
          <span class="dropdown-accordion__button-arrow">
            <IcArrowDown :font-controlled="false" :filled="true" />
          </span>
        </button>
      </div>
    </label>
    <div class="dropdown-accordion__drop">
      <div class="dropdown-accordion__drop-search">
        <input v-model="searchValue" class="dropdown-accordion__drop-search-input" type="text" placeholder="Поиск" />
      </div>
      <ul class="dropdown-accordion__drop-list">
        <template v-if="searchValue">
          <li v-for="service in filteredServices" :key="service.id" class="dropdown-accordion__drop-service">
            <UIService
              :service="service"
              :with-checkbox="true"
              :checked="setChecked(service, checkedServices)"
              @on-change="(changeService) => emit('onChangeService', changeService)"
            />
          </li>
        </template>
        <template v-else>
          <li v-for="item in items" :key="item.id" class="dropdown-accordion__drop-accordion">
            <UIAccordion
              :title="item.title"
              :services-category="item"
              :checked-services-category="checkedServicesCategory(item, checkedServices)"
              @on-change-service="(changeService) => emit('onChangeService', changeService)"
            />
          </li>
        </template>
      </ul>
    </div>
    <p v-if="errorMessage" class="dropdown-accordion__error">{{ errorMessage }}</p>
  </div>
</template>

<style lang="scss">
.dropdown-accordion {
  position: relative;

  &__label {
    cursor: pointer;
  }

  &__title {
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 4px;

    @include text-main-small;
    color: $color-gray-light;

    @include mobile {
      margin-left: 0;
    }

    &--without-margin {
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

    &:disabled {
      cursor: auto;
    }
  }

  &__button {
    background: none;
    border: $fields-border;
    padding: 12px 15px;
    outline: none;
    cursor: pointer;

    &:disabled {
      cursor: auto;
    }

    &-arrow {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.2s ease;
      color: $color-second;

      svg {
        @include svg-color($color-second);
      }
    }
  }

  &__drop {
    display: none;
    position: absolute;
    top: 83px;
    left: 0;
    width: 560px;
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

    @include tablet {
      width: 100%;
    }

    @include mobile {
      width: 100%;
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

    &-service {
      padding: 0 14px 0 20px;
      background-color: $color-white;

      &:not(:last-child) {
        border-bottom: 2px solid $color-light-gray-lighter;
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

  &--opened {
    .dropdown-accordion {
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
    .dropdown-accordion {
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

  &--error {
    .dropdown-accordion {
      &__title {
        color: red;
      }

      &__input {
        border-color: red;
      }

      &__button {
        border-color: red;
      }
    }
  }
}
</style>
