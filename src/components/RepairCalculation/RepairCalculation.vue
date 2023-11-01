<script lang="ts" setup>
import type { RepairCalculation } from '@/components/RepairCalculation/RepairCalculation.types';
import { useServicesAllStore } from '@/store/servicesAll';
import type { changedServicesAllItemChild } from '@/store/servicesAll/servicesAll.types';

const props = defineProps<RepairCalculation>();

const { servicesAllActions } = useServicesAllStore();

const carsBrands = Object.keys(props.cars);
const carsBrandsInput = ref(carsBrands[0]);
const carsModels = ref(props.cars[carsBrandsInput.value]);
const carsModelsInput = ref(carsModels.value[0]);

const carsBrandsOnSelectItemHandler = (value: string) => {
  carsBrandsInput.value = value;
  carsModels.value = props.cars[value];
  carsModelsInput.value = carsModels.value[0];
};

const carsModelsOnSelectItemHandler = (value: string) => {
  carsModelsInput.value = value;
};

const onChangeServiceHandler = (service: changedServicesAllItemChild) => {
  servicesAllActions.changeChooseService(service);
};

const onRemoveServiceHandler = (service: changedServicesAllItemChild) => {
  servicesAllActions.changeChooseService(service);
};
</script>

<template>
  <section class="repair-calculation">
    <AppContainer>
      <h2 class="repair-calculation__title">Рассчитайте стоимость ремонта</h2>
      <p class="repair-calculation__description">выберите марку, модель и станцию обслуживания</p>
      <div class="repair-calculation__content">
        <div class="repair-calculation__selects">
          <div class="repair-calculation__car-brand">
            <UIDropdown
              :title="'Марка'"
              :placeholder="'Выберите марку'"
              :items="carsBrands"
              :value="carsBrandsInput"
              @on-select-item="carsBrandsOnSelectItemHandler($event)"
            />
          </div>
          <div class="repair-calculation__car-model">
            <UIDropdown
              :title="'Модель'"
              :placeholder="'Выберите модель'"
              :items="carsModels"
              :value="carsModelsInput"
              @on-select-item="carsModelsOnSelectItemHandler($event)"
            />
          </div>
          <div class="repair-calculation__services">
            <UIDropdownWithAccordion
              :title="'Услуга'"
              :placeholder="'Выберите услуги'"
              :items="services"
              :checked-services="chooseServices"
              @on-change-service="onChangeServiceHandler"
            />
          </div>
        </div>
        <div class="repair-calculation__services-result">
          <UIServices :services="chooseServices" @on-remove-service="onRemoveServiceHandler" />
        </div>
      </div>
    </AppContainer>
  </section>
</template>

<style lang="scss" scoped>
.repair-calculation {
  padding: 59px 0 78px 0;

  @include mobile {
    padding: 38px 0 50px 0;
  }

  &__title {
    margin-bottom: 6px;

    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 2px;

      @include title-main-xxsmall-bold;
    }
  }

  &__description {
    @include text-main;
    color: $color-gray-dark;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;

    @include tablet {
      flex-direction: column;
      align-items: center;
    }

    @include mobile {
      flex-direction: column;
      align-items: center;
      margin-top: 16px;
    }
  }

  &__selects {
    width: 100%;
    max-width: 285px;
    display: flex;
    flex-direction: column;
    gap: 21px;
    margin-bottom: 10px;

    @include tablet {
      max-width: inherit;
      gap: 11px;
    }

    @include mobile {
      max-width: inherit;
      gap: 11px;
    }
  }

  &__services-result {
    width: 100%;
    max-width: 793px;

    @include media-range($desktop-form, $screen-medium-min) {
      max-width: 650px;
    }

    @include tablet {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
    }
  }
}
</style>
