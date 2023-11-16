<script lang="ts" setup>
import type { MenuItem } from '@/store/menu/menu.types';

defineProps<{
  isOpenServicesAllModal: boolean;
  menu: MenuItem[];
}>();
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
      <template v-for="item in menu" :key="item.id">
        <li v-if="Number(item.is_active) === 1" class="navigation__item">
          <NuxtLink
            v-if="Number(item.is_modal) === 0"
            class="navigation__item-link"
            :active-class="!isOpenServicesAllModal ? 'navigation__item-link--active' : ''"
            :to="item.link"
            @click="emits('clickOnLink')"
            >{{ item.title }}</NuxtLink
          >
          <div
            v-else
            :class="['navigation__item-link', isOpenServicesAllModal ? 'navigation__item-link--active' : '']"
            @click="emits('toggleServicesAllModal')"
          >
            <span class="navigation__item-link-text">{{ item.title }}</span>
            <span class="navigation__item-link-arrow">
              <IcArrowDownNavigation :font-controlled="false" :filled="true" />
            </span>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  &__list {
    display: flex;
    gap: 30px;
    list-style-type: none;
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
