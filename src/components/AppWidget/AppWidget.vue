<script lang="ts" setup>
import whatsapp from '@/assets/icons/whatsapp.svg';
import telegram from '@/assets/icons/telegram.svg';
import vk from '@/assets/icons/vk.svg';
import { useBooleanState } from '@/composables/useBooleanState';
import { useClickOutside } from '@/composables/useClickOutside';
import { ref } from 'vue';

const socials = [
  { icon: whatsapp, backgroundColor: '#51CB5F' },
  { icon: telegram, backgroundColor: '#29A9EB' },
  { icon: vk, backgroundColor: '#0077FF' },
];

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
        <li v-for="social in socials" :key="social.icon" class="widget__social">
          <a
            class="widget__social-link"
            :href="'/#'"
            :style="{ backgroundColor: social.backgroundColor }"
            target="_blank"
            rel="noopener"
          >
            <component :is="social.icon" :font-controlled="false" :filled="true" />
          </a>
        </li>
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
  max-width: 390px;
  z-index: 100;

  @include mobile {
    right: 16px;
    bottom: 32px;
    max-width: 328px;
  }

  @include media-range(320px, 360px) {
    max-width: 288px;
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
    gap: 10px;
    list-style-type: none;
  }

  &__social {
    &-link {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
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
