<script lang="ts" setup>
import { useBooleanState } from '@/composables/useBooleanState';
import { useClickOutside } from '@/composables/useClickOutside';
import { ref } from 'vue';
import type { AppWidget } from '@/components/AppWidget/AppWidget.types';

defineProps<AppWidget>();

const WidgetNodeRef = ref<HTMLDivElement | null>(null);

const [isOpenWidget, , closeWidget, toggleWidget] = useBooleanState(false);

useClickOutside(WidgetNodeRef, closeWidget);
</script>

<template>
  <div ref="WidgetNodeRef" class="widget" :class="{ 'widget--open': isOpenWidget }">
    <button class="widget__button" type="button" @click="toggleWidget">
      <IcWidgetClose v-if="isOpenWidget" :font-controlled="false" :filled="true" />
      <IcChat v-else :font-controlled="false" :filled="true" />
    </button>
    <div class="widget__content">
      <p class="widget__title">Запись на сервис</p>
      <ul class="widget__socials">
        <template v-for="social in widgetSocials">
          <li v-if="Number(social.is_active_widget) === 1" :key="social.id" class="widget__social">
            <a
              class="widget__social-link"
              :href="social.link"
              :style="{ backgroundImage: `url('${social.icon_widget}')` }"
              target="_blank"
              rel="noopener"
            >
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.widget {
  position: fixed;
  bottom: 60px;
  right: 30px;
  width: 100%;
  max-width: clamp(248px, calc(100% - 32px), 390px);
  z-index: 100;

  @include mobile {
    right: 16px;
    bottom: 32px;
  }

  &__button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: $color-second;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: $color-second-lightest;
    }

    @include mobile {
      width: 48px;
      height: 48px;
    }
  }

  &__content {
    display: none;
    position: absolute;
    bottom: 80px;
    right: 0;
    width: 100%;
    padding: 30px 30px 35px 30px;
    border-radius: 8px;
    background-color: $color-second;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s ease;

    @include mobile {
      bottom: 64px;
      padding: 30px 24px 35px 24px;
    }
  }

  &__title {
    margin-bottom: 25px;
    @include title-main-xxsmall-grow;
    color: $color-white;
  }

  &__socials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style-type: none;
  }

  &__social {
    &-link {
      width: 40px;
      height: 40px;
      border: 1px solid $color-white;
      border-radius: 50%;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }

  &--open {
    .widget__content {
      display: block;
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
