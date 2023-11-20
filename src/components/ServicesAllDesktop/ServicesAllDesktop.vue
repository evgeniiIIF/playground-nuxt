<script setup lang="ts">
import type { ServicesAllItem, ServicesAllItemEmits } from '@/store/servicesAll/servicesAll.types';

const props = defineProps<{ services: ServicesAllItem[] }>();
const emits = defineEmits<ServicesAllItemEmits>();

const currentServicesItemL1 = ref<ServicesAllItem | undefined>();

const setCurrentServicesItemL1 = (item: ServicesAllItem) => {
  currentServicesItemL1.value = item;
};

const goTo = (item: ServicesAllItem | undefined) => {
  navigateTo({ path: `/services/${item?.slug}` });
  closeServicesAllModal();
};

const closeServicesAllModal = () => {
  emits('closeServicesAllModal');
  setSearchServicesValue('');
};

const searchServicesValue = ref('');

const setSearchServicesValue = (value: string) => {
  searchServicesValue.value = value;
};

const foundServicesItems = computed(() => {
  // const foundItems = props.services;
  const found: ServicesAllItem[] = [];

  const getLastLevelItems = (arr: ServicesAllItem[]) => {
    return arr.reduce((acc, item) => {
      if (
        item.full_path.split('>').length === 3 &&
        !item.children.length &&
        item.title.toLowerCase().includes(searchServicesValue.value.toLowerCase())
      ) {
        acc.push(item);
        return acc;
      }

      getLastLevelItems(item.children);
      return acc;
    }, found);
  };

  return getLastLevelItems(props.services);
});

const packagedColumnsItems = computed(() => {
  const arrayOfObjects = currentServicesItemL1.value?.children;
  const countItems = arrayOfObjects?.length ?? 0;
  const chunkSize = arrayOfObjects && arrayOfObjects.length ? Math.ceil(arrayOfObjects.length / 2) : 0;
  const arrayOfArrays = [];

  for (let i = 0; i < countItems; i += chunkSize) {
    const chunk = arrayOfObjects?.slice(i, i + chunkSize);
    arrayOfArrays.push(chunk);
  }

  return arrayOfArrays;
});

onMounted(() => setCurrentServicesItemL1(props.services[0]));

// [{ id: 1, children: [{ id: 2, children: [{ id: 3, title: 'value' }] }] }];
</script>
<template>
  <div class="services-all-desktop">
    <div class="container">
      <div class="services-all-desktop__top">
        <h2 class="services-all-desktop__top-title">Поиск по услугам автосервиса</h2>
        <div class="services-all-desktop__top-actions">
          <div class="services-all-desktop__top-input">
            <UIInputSearch :value="searchServicesValue" @onInput="setSearchServicesValue($event)" />
          </div>
          <div class="services-all-desktop__top-close" @click="closeServicesAllModal">
            <IcClose :font-controlled="false" :filled="true" />
          </div>
        </div>
      </div>
      <nav class="services-all-desktop__nav">
        <ul class="services-all-desktop__col-left services-all-desktop-l1">
          <li
            v-for="servicesItemL1 in props.services"
            :key="servicesItemL1.id"
            :class="[
              'services-all-desktop-l1__item',
              servicesItemL1.id === currentServicesItemL1?.id ? 'services-all-desktop-l1__item--active' : '',
            ]"
          >
            <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
            <ServicesAllNavItemL1
              :item="servicesItemL1"
              @click="goTo(servicesItemL1)"
              @mouseenter="setCurrentServicesItemL1(servicesItemL1)"
            />
          </li>
        </ul>
        <ul v-if="Boolean(!searchServicesValue)" class="services-all-desktop__col-right services-all-desktop-l2">
          <li
            v-for="(packagedColumnsItem, index) in packagedColumnsItems"
            :key="index"
            class="services-all-desktop-l2__column"
          >
            <ul class="services-all-desktop-l2__column-list">
              <li
                v-for="servicesItemL2 in packagedColumnsItem"
                :key="servicesItemL2.id"
                class="services-all-desktop-l2__column-item"
              >
                <ServicesAllNavItemL2 :item="servicesItemL2" @go-to="goTo($event)" />
              </li>
            </ul>
          </li>
        </ul>
        <ul v-else class="services-all-desktop__col-right services-all-desktop-found">
          <li v-for="foundItem in foundServicesItems" :key="foundItem.id" class="services-all-desktop-found__item">
            <ServicesAllNavItemL3 :item="foundItem" @go-to="goTo(foundItem)" :searchValue="searchServicesValue" />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.services-all-desktop {
  &__top {
    padding-top: 34px;
    margin-bottom: 40px;
  }
  &__nav {
    display: flex;
  }

  &__top-title {
    margin-bottom: 11px;
    color: var(--Black, #18243c);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 133.333% */
  }
  &__top-actions {
    display: flex;
    justify-content: space-between;
  }
  &__top-input {
  }
  &__top-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      @include fill-svg-and-path(#3f3f41);
    }
  }

  &__col-left {
    position: relative;
    flex: 0 0 360px;
    margin-right: 32px;

    &::before {
      position: absolute;
      top: 0;
      right: -32px;
      content: '';
      width: 2px;
      height: 75%;
      background-color: #f3f3f3;
    }
  }
  &__col-right {
    flex: 1 1 auto;
    height: calc(100vh - (115px + 138px));
    padding-bottom: 100px;
    overflow-y: auto;
    margin-left: 30px;
    @include mb(30px);
    @include scrollbar-y();
  }
}
.services-all-desktop-l1 {
  list-style: none;
  @include mb(5px);

  &__item {
    padding: 13px 15px;
    cursor: pointer;
  }
  &__item--active {
    background: #f3f3f3;
  }
}
.services-all-desktop-l2 {
  display: flex;

  list-style: none;
  @include mr(35px);

  &__column {
  }

  &__column-list {
    @include mb(30px);
    padding-bottom: 80px;
  }

  &__column-item {
  }
}
.services-all-desktop-found {
  &__item {
    cursor: pointer;
  }
}
</style>
