<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { AutoServicesSubcategoryTypes } from '@/components/AutoServicesSubcategory/AutoServicesSubcategory.types';

const props = defineProps<AutoServicesSubcategoryTypes>();
const countOfItemsIsVisible = 3;
const slicedLength = ref(countOfItemsIsVisible);
const slicedServices = computed(() => {
  if (props.items?.length) {
    return props.items.slice(0, slicedLength.value);
  }

  return [];
});
</script>

<template>
  <NuxtLink
    class="auto-services-subcategory__title"
    :class="{ 'auto-services-subcategory__title--without-services': items?.length }"
    :to="`services/${slug}`"
  >
    {{ title }}
  </NuxtLink>
  <ul v-if="items && items.length > 0" class="auto-services-subcategory__list">
    <li v-for="service in slicedServices" :key="service.id" class="auto-services-subcategory__item">
      <NuxtLink class="auto-services-subcategory__item-link" :to="`services/${service.slug}`">{{
        service.title
      }}</NuxtLink>
    </li>
    <button
      v-if="items.length > countOfItemsIsVisible && slicedServices.length <= countOfItemsIsVisible"
      type="button"
      class="auto-services-subcategory__button-open"
      @click="slicedLength = items.length"
    >
      Показать еще {{ items.length - slicedServices.length }}
    </button>
    <button
      v-else-if="items.length > countOfItemsIsVisible && slicedServices.length > countOfItemsIsVisible"
      type="button"
      class="auto-services-subcategory__button-close"
      @click="slicedLength = countOfItemsIsVisible"
    >
      Скрыть
    </button>
  </ul>
</template>

<style lang="scss">
.auto-services-subcategory {
  &__title {
    &:not(:last-child) {
      margin-bottom: 9px;
    }

    @include title-main-xxxsmall-grow;
    color: $color-gray-dark;

    &--without-services {
      margin-bottom: 0;
    }

    @include mobile {
      @include text-main-large-medium;

      &:not(:last-child) {
        margin-bottom: 6px;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: none;

    @include mobile {
      gap: 10px;
    }
  }

  &__item {
    position: relative;
    padding-left: 15px;

    &::before {
      position: absolute;
      top: 2px;
      left: 0;
      width: 15px;
      height: 15px;
      content: '';
      background: url('~/assets/icons/arrow-right.svg') no-repeat center;
    }

    &-link {
      @include text-main-big;
      color: $color-gray;

      @include mobile {
        @include text-main;
      }
    }
  }

  &__button {
    &-open,
    &-close {
      align-self: flex-start;
      background: none;
      border: none;

      @include text-main;
      color: $color-gray-lighter;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
}
</style>
