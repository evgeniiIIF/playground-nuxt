<script setup lang="ts">
import type { ServicesAllItem, ServicesAllItemEmits } from '@/store/servicesAll/servicesAll.types';
import { wrapSubstringWithSpan } from '@/components/ServicesAllNavItemL3/ServicesAllNavItemL3.utils';

const props = defineProps<{
  item: ServicesAllItem | undefined;
  searchValue?: string;
}>();

const emits = defineEmits<ServicesAllItemEmits>();

const textHigLight = computed(() => {
  return wrapSubstringWithSpan(props.item?.title, props.searchValue);
});
</script>

<template>
  <div class="services-all-item-l3" @click.stop="emits('goTo', item)">
    <div class="services-all-item-l3__arrow">
      <IcArrowRight :font-controlled="false" :filled="true" />
    </div>
    <h2 v-if="!searchValue" class="services-all-item-l3__title">{{ item?.title }}</h2>
    <h2 v-else class="services-all-item-l3__title" v-html="textHigLight"></h2>
  </div>
</template>

<style lang="scss">
.underline {
  font-weight: 500;
  color: #00a19c;
}
.services-all-item-l3 {
  display: flex;
  align-items: center;

  &__arrow {
    display: flex;
    align-items: center;
    margin-right: 7px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
  &__title {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: var(--3, #868789);
    transition: all 0.3s ease;
  }

  &:hover {
    .services-all-item-l3 {
      &__arrow {
        svg {
          @include fill-svg-and-path($color-second, 100ms);
        }
      }

      &__title {
        color: $color-second;
      }
    }
  }
}
</style>
