<script setup lang="ts">
import type { ServicesAllItemChild, ServicesAllItemChildEmits } from '@/store/servicesAll/servicesAll.types';

const { item } = defineProps<{ item: ServicesAllItemChild | undefined }>();
const emits = defineEmits<ServicesAllItemChildEmits>();

const hasButton = computed(() => item?.children?.length && item?.children?.length > 2);
const [isOpenList, , , toggleList] = useBooleanState(false);

const children = computed(() => {
  if (hasButton.value && !isOpenList.value) {
    return item?.children?.slice(0, 2);
  }

  return item?.children;
});
</script>

<template>
  <div class="services-all-item-l2">
    <h3 class="services-all-item-l2__title" @click="emits('goTo', item)">
      {{ item?.title }}
    </h3>
    <ul v-if="item?.children" class="services-all-item-l2__list">
      <li v-for="servicesItemL3 in children" :key="servicesItemL3.id" class="services-all-item-l2__item">
        <ServicesAllNavItemL3 :item="servicesItemL3" @go-to="emits('goTo', $event)" />
      </li>
      <div v-if="hasButton" class="services-all-item-l2__button show-button">
        <button class="show-button__button" type="button" @click="toggleList">
          <div class="show-button__text">{{ isOpenList ? 'Свернуть' : 'Ещё' }}</div>
          <div class="show-button__arrow">
            <IcArrowDown
              :font-controlled="false"
              :filled="true"
              :style="isOpenList ? { transform: 'rotate(180deg)' } : ''"
            />
          </div>
        </button>
      </div>
    </ul>
  </div>
</template>

<style lang="scss">
.services-all-item-l2 {
  &__title {
    margin-bottom: 9px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px; /* 156.25% */
    color: #18243c;
    cursor: pointer;
  }
  &__list {
    @include mb(15px);
  }
  &__item {
    cursor: pointer;
  }
  &__button {
  }
}
.show-button {
  &__button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  &__text {
    font-size: 16px;
    line-height: 16px;
    color: #00a19c;
  }
  &__arrow {
    display: flex;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      @include fill-svg-and-path(#00a19c);
    }
  }
}
</style>
