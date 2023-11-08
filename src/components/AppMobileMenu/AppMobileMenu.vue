<script setup lang="ts">
import type { UIModalEmits, UIModalProps } from '@/components/UIModal/UIModal.types';

defineProps<UIModalProps>();
</script>
<template>
  <div class="mobile-menu">
    <UIModal :is-open="isOpen" :position="position" :close-button="false">
      <div class="mobile-menu__wrapper">
        <div class="mobile-menu__nav">
          <AppNavigation />
        </div>
        <div class="mobile-menu__social">
          <IcSocialTelegram :font-controlled="false" :filled="true" />
          <IcSocialWhatsapp :font-controlled="false" :filled="true" />
          <IcSocialVk :font-controlled="false" :filled="true" />
        </div>
        <div class="mobile-menu__calls">
          <a class="mobile-menu__phone" href="tel:88652500520" rel="noopener">+7 (8652) 500-520</a>
          <span class="mobile-menu__callback">обратный звонок</span>
        </div>
        <div class="mobile-menu__button">
          <UIButton text="Записаться на сервис" />
        </div>
      </div>
    </UIModal>
  </div>
</template>

<style lang="scss">
.mobile-menu {
  &__wrapper {
    padding: 17px 16px 30px 16px;
    background: #fff;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &__nav {
    margin-bottom: 34px;
  }
  &__social {
    margin-bottom: 74px;
    @include mr(20px);
  }
  &__calls {
    margin-bottom: 43px;
  }
  &__phone {
    margin-bottom: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
    color: var(--Black, #18243c);
  }
  &__callback {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    color: var(--Black, #18243c);
  }
  &__button {
    .button {
      width: 100%;
      background: #00a19c;
    }
  }
}
.mobile-mode {
  .ui-modal {
    margin-top: 91px;

    &__container {
      .mobile-menu__wrapper {
        height: calc(100vh - 91px);

        .navigation {
          &__list {
            flex-direction: column;
          }

          &__item-link {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 125% */
            color: var(--Black, #18243c);
          }
          &__item-link-arrow {
            svg {
              transform: rotate(270deg);
              @include fill-svg-and-path(#18243c);
            }
          }
        }
      }
    }
  }
}
</style>
