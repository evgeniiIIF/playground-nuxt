<script setup lang="ts">
import type { ServicesAllItem } from '@/store/servicesAll/servicesAll.types';

const props = defineProps<{ services: ServicesAllItem[] }>();
const emits = defineEmits<{ (event: 'closeServicesAllModal'): void; (event: 'closeMobileMenu'): void }>();

const currentServicesItemL1 = ref<ServicesAllItem | undefined>();
const currentServicesItemL2 = ref<ServicesAllItem | undefined>();
const step = ref(0);
const currentTitle = computed(() => {
  let title = 'Услуги';

  if (step.value === 1 && currentServicesItemL1.value?.title) title = currentServicesItemL1.value.title;
  if (step.value === 2 && currentServicesItemL2.value?.title) title = currentServicesItemL2.value.title;

  return title;
});

const setCurrentServicesItemL1 = (item: ServicesAllItem) => {
  currentServicesItemL1.value = item;
  step.value += 1;
};
const setCurrentServicesItemL2 = (item: ServicesAllItem) => {
  currentServicesItemL2.value = item;
  step.value += 1;
};
const goBackOneStep = () => {
  step.value <= 0 ? emits('closeServicesAllModal') : (step.value -= 1);
  console.log(step.value);
};

const goTo = (item: ServicesAllItem | undefined) => {
  emits('closeServicesAllModal');
  emits('closeMobileMenu');

  navigateTo({ path: `/services/${item?.slug}` });
};

const closeAllModals = () => {
  emits('closeServicesAllModal');
  emits('closeMobileMenu');
};
</script>

<template>
  <div class="services-all-mobile">
    <div class="container">
      <div class="services-all-mobile__top">
        <div class="services-all-mobile__buttons buttons-service-all">
          <button type="button" class="buttons-service-all__go-back" @click="goBackOneStep">
            <div class="buttons-service-all__go-back-arrow">
              <IcArrowLeft :font-controlled="false" :filled="true" />
            </div>
            <div class="buttons-service-all__go-back-text">Назад</div>
          </button>

          <div class="buttons-service-all__close" @click="closeAllModals">
            <IcClose :font-controlled="false" :filled="true" />
          </div>
        </div>

        <div class="buttons-service-all__input">
          <UIInputSearch />
        </div>

        <h2 class="services-all-mobile__title">
          {{ currentTitle }}
        </h2>
      </div>

      <nav class="services-all-mobile__nav">
        <ul v-if="step === 0" class="services-all-mobile-l1">
          <li v-for="itemL1 in props.services" :key="itemL1.id" class="services-all-mobile-l1__item">
            <div class="item-services-all-l1" @click="setCurrentServicesItemL1(itemL1)">
              <div class="item-services-all-l1__icon"><img :src="itemL1.icon" alt="." /></div>
              <div class="item-services-all-l1__title">{{ itemL1.title }}</div>
              <div class="item-services-all-l1__arrow"><IcArrowRight /></div>
            </div>
          </li>
        </ul>
        <ul v-if="currentServicesItemL1 && step === 1" class="services-all-mobile-l1">
          <li v-for="itemL2 in currentServicesItemL1?.children" :key="itemL2.id" class="services-all-mobile-l1__item">
            <div class="item-services-all-l1" @click="setCurrentServicesItemL2(itemL2)">
              <div class="item-services-all-l1__title">{{ itemL2.title }}</div>
              <div class="item-services-all-l1__arrow"><IcArrowRight /></div>
            </div>
          </li>
        </ul>
        <ul v-if="currentServicesItemL2 && step === 2" class="services-all-mobile-l3">
          <li v-for="itemL3 in currentServicesItemL2?.children" :key="itemL3.id" class="services-all-mobile-l1__item">
            <div class="item-services-all-l3" @click="goTo(itemL3)">
              <div class="item-services-all-l3__arrow"><IcArrowRight /></div>
              <div class="item-services-all-l3__title">{{ itemL3.title }}</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss">
.services-all-mobile {
  padding-bottom: 50px;
  overflow-y: auto;
  height: inherit;

  &__top {
    padding: 10px 0 25px 0;
  }
  &__buttons {
    margin-bottom: 12px;
  }

  &__nav {
  }

  &__title {
    color: var(--Black, #18243c);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
  }
}
.services-all-mobile-l1 {
  list-style: none;
  @include mb(30px);

  &__item {
  }
  &__item--active {
    background: #f3f3f3;
  }
}
.services-all-mobile-l3 {
  list-style: none;

  @include mb(20px);
}
.item-services-all-l1 {
  display: flex;
  align-items: center;
  @include mr(10px);

  &__icon {
    display: flex;
    align-items: center;
    width: 24px;
  }
  &__title {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 125% */
    color: var(--Black, #18243c);
  }
  &__arrow {
    display: flex;
    align-items: center;
  }
}
.item-services-all-l3 {
  display: flex;
  align-items: center;
  &__title {
    color: var(--3, #868789);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
  &__arrow {
    display: flex;
    align-items: center;
    margin-right: 5px;
    svg {
      width: 15px;
      height: 15px;
      @include fill-svg-and-path(#868789);
    }
  }
}
.buttons-service-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__go-back {
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  &__go-back-arrow {
    margin-right: 4px;
    display: flex;
    align-items: center;
  }
  &__go-back-text {
    color: #b3baba;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }
  &__close {
    display: flex;
    align-items: center;
    svg {
      width: 24px;
      height: 24px;
      @include fill-svg-and-path(#b3baba);
    }
  }
  &__input {
    margin-bottom: 23px;
    .input-search__input {
      width: 100%;
      padding: 10px;
    }
    .input-search__icon {
      right: 10px;
    }
  }
}
</style>
