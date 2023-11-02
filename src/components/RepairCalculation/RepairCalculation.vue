<script lang="ts" setup>
const mockedCarsData = ['BMW', 'Audi', 'Acura', 'Nissan', 'Tyouta', 'Opel'];
const mockedCardModelsData = ['100', '200', '300', 'rs7', 'rs8', 'x6', 'm8', 'skyline'];
const mockedServicesData = [
  { name: 'Замена свечей зажигания', price: 14000 },
  { name: 'Замена масляного фильтра', price: 2400 },
  { name: 'Замена масла в двигателе', price: 400 },
  { name: 'Диагностика подвески', price: 900 },
  { name: 'Диагностика двигателя', price: 1200 },
  { name: 'Диагностика топливной', price: 2100 },
  { name: 'Диагностика ходовой', price: 3500 },
  { name: 'Компьютерная диагностика', price: 2200 },
];
</script>

<template>
  <section class="repair-calculation">
    <div class="container">
      <h2 class="repair-calculation__title">Рассчитайте стоимость ремонта</h2>
      <p class="repair-calculation__description">выберите марку, модель и станцию обслуживания</p>
      <div class="repair-calculation__content">
        <div class="repair-calculation__selects">
          <div class="repair-calculation__car-brand">
            <UIDropdown :title="'Марка'" :placeholder="'Выберите марку'" :items="mockedCarsData" />
          </div>
          <div class="repair-calculation__car-model">
            <UIDropdown :title="'Модель'" :placeholder="'Выберите модель'" :items="mockedCardModelsData" />
          </div>
          <div class="repair-calculation__services">
            <UIDropdown
              :title="'Услуга'"
              :placeholder="'Выберите услуги'"
              :with-accordion="true"
              :items="mockedServicesData"
            />
          </div>
        </div>
        <div class="repair-calculation__services-result">
          <UIServices :items="mockedServicesData" />
        </div>
      </div>
    </div>
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
