<script lang="ts" setup>
import { ref } from 'vue';
import { useClickOutside } from '@/composables/useClickOutside';
import type {
  UIDropdownWithAccordion,
  UIDropdownWithAccordionEmits,
} from '@/components/UIDropdownWithAccordion/UIDropdownWithAccordion.types';
import type { ServicesAllItemChild, ServicesAllItemParent } from '~/store/servicesAll/servicesAll.types';
import {setChecked} from "@/utils/setChecked/setChecked";

const props = defineProps<UIDropdownWithAccordion>();
const emit = defineEmits<UIDropdownWithAccordionEmits>();

const [isOpenDropdown, , closeDropdown, toggleDropdown] = useBooleanState(false);
const DropdownNodeRef = ref<HTMLDivElement | null>(null);
const searchValue = ref('');

const toggleHandler = () => {
  if (props.items.length === 0) return;
  toggleDropdown();
};

useClickOutside(DropdownNodeRef, closeDropdown);


/* TODO */
/* По-хорошему надо написать рекурсию и фильтровать по id, а не по path  */
const checkedServicesCategory = (category: ServicesAllItemParent, checkedServices?: ServicesAllItemChild[]) => {
  return checkedServices?.filter((service) => service.full_path.split('>')[0] === category.full_path);
};

/* TODO */
/* Привязываться к двум уровням вложенности не очень хорошо */
/* т.к. могут добавить третий. Лучше написать рекурсию */
/* которая будет вытаскивать все сервисы в один массив */
/* сколько бы уровней не было */

const allServices = props.items
  .map((item) => {
    const parentChildren = item.children;

    return parentChildren
      .map((child) => {
        if (child.children?.length) {
          return [child, ...child.children];
        }

        return child;
      })
      .flat();
  })
  .flat();

const filteredServices = computed(() => {
  return allServices.filter((service) => service.title.toLowerCase().includes(searchValue.value.toLowerCase()));
});

const setValue = (checkedServices?: ServicesAllItemChild[]) => {
  return checkedServices?.length ? `Выбрано ${checkedServices.length} услуг` : '';
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
          :value="setValue(checkedServices)"
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
    <div class="dropdown__drop dropdown__drop--with-accordion">
      <div class="dropdown__drop-search">
        <input v-model="searchValue" class="dropdown__drop-search-input" type="text" placeholder="Поиск" />
      </div>
      <ul class="dropdown__drop-list">
        <template v-if="searchValue">
          <li v-for="service in filteredServices" :key="service.id" class="dropdown__drop-service">
            <UIService
              :service="service"
              :with-checkbox="true"
              :checked="setChecked(service, checkedServices)"
              @on-change="(changeService) => emit('onChangeService', changeService)"
            />
          </li>
        </template>
        <template v-else>
          <li v-for="item in items" :key="item.id" class="dropdown__drop-accordion">
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

    &-service {
      padding: 0 14px 0 20px;
      background-color: $color-white;

      &:not(:last-child) {
        border-bottom: 2px solid #f0f0f5;
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
