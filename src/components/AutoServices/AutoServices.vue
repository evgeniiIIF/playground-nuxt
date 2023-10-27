<script lang="ts" setup>
import type { AutoServicesTypes } from '~/components/AutoServices/AutoServices.types';

defineProps<AutoServicesTypes>();

const isHidden = ref(true);
</script>

<template>
  <section class="auto-services" :class="{ 'auto-services--full-height': !isHidden }">
    <AppContainer>
      <h2 class="auto-services__title">Услуги</h2>
      <div class="auto-services__services">
        <div v-for="service in services" :key="service.id" class="auto-services__services-category">
          <h3 class="auto-services__services-category-title">{{ service.title }}</h3>
          <ul v-if="service.children.length > 0" class="auto-services__services-category-list">
            <li
              v-for="subcategory in service.children"
              :key="subcategory.id"
              class="auto-services__services-subcategory"
              :class="{ 'auto-services__services-subcategory--without-services': subcategory.children?.length === 0 }"
            >
              <AutoServicesSubcategory :title="subcategory.title" :items="subcategory.children" />
            </li>
          </ul>
        </div>
      </div>
    </AppContainer>
    <div class="auto-services__hidden-block" :class="{ 'auto-services__hidden-block--without-background': !isHidden }">
      <div class="auto-services__hidden-block-container">
        <div class="auto-services__hidden-block-buttons-desktop">
          <button
            v-if="isHidden === true"
            class="auto-services__hidden-block-button"
            type="button"
            @click="isHidden = false"
          >
            <span class="auto-services__hidden-block-button-text">Показать еще</span>
            <span class="auto-services__hidden-block-button-arrow-down"
              ><IcArrowDown :font-controlled="false" :filled="true"
            /></span>
          </button>
          <button v-else class="auto-services__hidden-block-button" type="button" @click="isHidden = true">
            <span class="auto-services__hidden-block-button-text">Скрыть</span>
            <span class="auto-services__hidden-block-button-arrow-up"
              ><IcArrowDown :font-controlled="false" :filled="true"
            /></span>
          </button>
        </div>
        <div class="auto-services__hidden-block-buttons-mobile">
          <UIButton
            v-if="isHidden === true"
            :is-filled="true"
            :has-full-width="true"
            text="Загрузить еще"
            :on-click="() => (isHidden = false)"
          />
          <UIButton v-else :is-filled="true" text="Скрыть" :has-full-width="true" :on-click="() => (isHidden = true)" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.auto-services {
  position: relative;
  padding: 60px 0 30px 0;
  max-height: 690px;
  overflow: hidden;

  &--full-height {
    max-height: 100%;
  }

  @include mobile {
    padding: 40px 0 50px 0;
  }

  &__title {
    margin-bottom: 34px;

    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 16px;

      @include title-main-xxsmall-bold;
    }
  }

  &__services {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @include media-end-to($screen-xsmall-max) {
      flex-direction: column;
    }

    &-category {
      max-width: 265px;

      @include media-range($desktop-form, $screen-medium-min) {
        max-width: inherit;
        width: calc(33% - 20px);
      }

      @include tablet {
        max-width: inherit;
        width: calc(50% - 20px);
      }

      @include mobile {
        max-width: inherit;
        width: calc(50% - 20px);
      }

      @include media-end-to($screen-xsmall-max) {
        max-width: inherit;
        width: 100%;
      }

      &-title {
        margin-bottom: 18px;

        @include title-main-xxsmall-grow;
        color: $color-blue;

        @include mobile {
          @include text-main-xxlarge-medium;
        }
      }

      &-list {
        list-style-type: none;
      }
    }

    &-subcategory {
      &:not(:last-child) {
        margin-bottom: 30px;
      }

      @include mobile {
        &:not(:last-child) {
          margin-bottom: 24px;
        }
      }

      &--without-services {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
  }

  &__hidden-block {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 29px;
    content: '';
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 38.14%, #fff 100%);

    &--without-background {
      position: inherit;
      height: auto;
      padding-bottom: 0;
      background: none;
    }

    &-container {
      @include tablet {
        width: 100%;
        padding: 0 16px;
      }

      @include mobile {
        width: 100%;
        padding: 0 16px;
      }
    }

    &-buttons {
      &-desktop {
        @include tablet {
          display: none;
        }

        @include mobile {
          display: none;
        }
      }

      &-mobile {
        display: none;
        width: 100%;
        margin-top: 35px;

        @include tablet {
          display: block;
        }

        @include mobile {
          display: block;
        }
      }
    }

    &-button {
      display: flex;
      align-items: center;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;

      &-text {
        @include title-main-xxxsmall;
        color: $color-second;
      }

      &-arrow-down,
      &-arrow-up {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          @include fill-svg-and-path($color-second);
        }
      }

      &-arrow-up {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
