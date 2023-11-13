<script lang="ts" setup>
defineProps<{ isOpenServicesAllModal: boolean }>();
const emits = defineEmits<{ (event: 'toggleServicesAllModal'): void; (event: 'clickOnLink'): void }>();

const navigationColorIsDark = computed(() => {
  const isDark = useRoute().path === '/';
  return isDark;
});

const navigationClass = computed(() => {
  return navigationColorIsDark.value ? '' : 'navigation--light';
});
</script>

<template>
  <nav class="navigation" :class="navigationClass">
    <ul class="navigation__list">
      <li class="navigation__item">
        <NuxtLink
          class="navigation__item-link"
          :active-class="!isOpenServicesAllModal ? 'navigation__item-link--active' : ''"
          to="/offers"
          @click="emits('clickOnLink')"
          >Акции</NuxtLink
        >
      </li>
      <li class="navigation__item">
        <div
          :class="['navigation__item-link', isOpenServicesAllModal ? 'navigation__item-link--active' : '']"
          @click="emits('toggleServicesAllModal')"
        >
          <span class="navigation__item-link-text">Услуги</span>
          <span class="navigation__item-link-arrow">
            <IcArrowDownNavigation :font-controlled="false" :filled="true" />
          </span>
        </div>
      </li>
      <li class="navigation__item">
        <NuxtLink
          class="navigation__item-link"
          :active-class="!isOpenServicesAllModal ? 'navigation__item-link--active' : ''"
          to="/bonus"
          @click="emits('clickOnLink')"
          >Бонусная программа</NuxtLink
        >
      </li>
      <li class="navigation__item">
        <NuxtLink
          class="navigation__item-link"
          :active-class="!isOpenServicesAllModal ? 'navigation__item-link--active' : ''"
          to="/about"
          @click="emits('clickOnLink')"
          >О компании</NuxtLink
        >
      </li>
      <li class="navigation__item">
        <NuxtLink
          class="navigation__item-link"
          :active-class="!isOpenServicesAllModal ? 'navigation__item-link--active' : ''"
          to="/contacts"
          @click="emits('clickOnLink')"
          >Контакты</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    gap: 30px;
    list-style-type: none;

    @include media-range($desktop-form, $screen-medium-min) {
      gap: 20px;
    }
  }

  &__item {
    &-link {
      display: flex;
      align-items: center;
      gap: 5px;

      cursor: pointer;
      text-decoration: none;
      @include text-main-big;
      color: $color-white;
      transition: all 0.3s ease;

      &:hover {
        color: $color-second-lighter;

        .navigation__item-link-arrow {
          svg {
            @include fill-svg-and-path($color-second-lighter, 100ms);
          }
        }
      }

      &:focus-visible {
        color: $color-second;

        .navigation__item-link-arrow {
          svg {
            @include fill-svg-and-path($color-second, 100ms);
          }
        }
      }

      &-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: rotate 0.2s ease;

        svg {
          @include fill-svg-and-path($color-white, 100ms);
        }
      }

      &--active {
        color: $color-second;

        .navigation__item-link-arrow {
          transform: rotate(180deg);

          svg {
            @include fill-svg-and-path($color-second, 100ms);
          }
        }
      }
    }
  }

  &--light {
    .navigation__item-link {
      color: $color-blue;

      &:hover {
        color: $color-second-lighter;

        .navigation__item-link-arrow {
          svg {
            @include fill-svg-and-path($color-second-lighter, 100ms);
          }
        }
      }

      &:focus-visible {
        color: $color-second;

        .navigation__item-link-arrow {
          svg {
            @include fill-svg-and-path($color-second, 100ms);
          }
        }
      }

      &-arrow {
        svg {
          @include fill-svg-and-path($color-blue, 100ms);
        }
      }

      &--active {
        color: $color-second;

        .navigation__item-link-arrow {
          transform: rotate(180deg);

          svg {
            @include fill-svg-and-path($color-second, 100ms);
          }
        }
      }
    }
  }
}
</style>
