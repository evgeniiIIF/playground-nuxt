<script setup lang="ts">
import type { OurPartners } from '@/components/OurPartners/OurPartners.types';

defineProps<OurPartners>();
</script>

<template>
  <section class="our-partners">
    <div class="container">
      <div class="our-partners__wrapper">
        <div class="our-partners__text">
          <h2 class="our-partners__title">{{ partners.title }}</h2>
          <p class="our-partners__description">{{ partners.subtitle }}</p>
        </div>
        <div class="our-partners__logos">
          <ul class="our-partners__companies-logos">
            <li v-for="item in partners.items" :key="item.id" class="our-partners__company-logo">
              <NuxtImg :src="item.logo" loading="lazy"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our-partners {
  padding: 60px 0 65px 0;
  background-color: #f3f3f3;

  @include mobile {
    padding: 38px 0 30px 0;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column;
      gap: 35px;
    }

    @include mobile {
      flex-direction: column;
      gap: 35px;
    }
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

  &__companies-logos {
    display: flex;
    flex-wrap: wrap;
    max-width: 790px;
    row-gap: 46px;

    list-style-type: none;

    @include media-range($desktop-form, $screen-medium-min) {
      max-width: 640px;
    }

    @include tablet {
      max-width: inherit;
      padding-bottom: 32px;
      flex-wrap: nowrap;
      overflow-x: auto;

      @include scrollbar-x;
    }

    @include mobile {
      max-width: inherit;
      padding-bottom: 32px;
      flex-wrap: nowrap;
      gap: 10px;
      overflow-x: auto;

      @include scrollbar-x;
    }
  }

  &__company-logo {
    display: flex;
    align-items: center;
    filter: grayscale(100);
    opacity: 0.6;

    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }

    img {
      width: 158px;
      height: 48px;

      @include mobile {
        width: 105px;
      }
    }
  }
}
</style>
