<script setup lang="ts">
import type { UIModalProps } from '@/components/UIModal/UIModal.types';
import type { Contacts, Social } from '@/store/contacts/contacts.types';
import type { MenuItem } from '@/store/menu/menu.types';

interface AppMobileMenuProps extends UIModalProps {
  isOpenServicesAllModal: boolean;
  contacts: Contacts;
  socials: Social[];
  menu: MenuItem[];
}

defineProps<AppMobileMenuProps>();
const emits = defineEmits<{ (event: 'toggleServicesAllModal'): void; (event: 'clickOnLink'): void }>();

const [isOpenModal, openModal, closeModal] = useBooleanState(false);
</script>
<template>
  <div class="mobile-menu">
    <UIModal :is-open="isOpen" :position="position" :close-button="false" :with-header="true">
      <div class="mobile-menu__wrapper">
        <div class="mobile-menu__nav">
          <AppNavigation
            :menu="menu"
            :is-open-services-all-modal="isOpenServicesAllModal"
            @clickOnLink="emits('clickOnLink')"
            @toggleServicesAllModal="emits('toggleServicesAllModal')"
          />
        </div>
        <ul v-if="socials.length" class="mobile-menu__socials">
          <template v-for="social in socials" :key="social.id">
            <li v-if="Object.keys(social).length" class="mobile-menu__social">
              <a
                class="mobile-menu__social-link"
                :href="social.link"
                target="_blank"
                rel="noopener"
                :style="{ backgroundImage: `url('${social.icon_mobile}')` }"
              >
              </a>
            </li>
          </template>
        </ul>
        <div class="mobile-menu__calls">
          <a
            v-if="contacts.content.phone"
            class="mobile-menu__phone"
            :href="`tel:${contacts.content.phone}`"
            rel="noopener"
            >{{ contacts.content.phone }}</a
          >
          <span class="mobile-menu__callback" @click="openModal">обратный звонок</span>
        </div>
        <div class="mobile-menu__button">
          <UIButton text="Записаться на сервис" />
        </div>
      </div>
    </UIModal>
    <UIModal :is-open="isOpenModal" position="center" @on-close="closeModal">
      <LazyAppCallbackForm title="Обратный звонок" />
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
  &__socials {
    display: flex;
    gap: 20px;
    margin-bottom: 74px;
    list-style-type: none;
  }
  &__social {
    width: 24px;
    height: 24px;

    &-link {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      text-decoration: none;
    }
  }
  &__calls {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

@include to(1280px) {
  .ui-modal--with-header {
    display: block;
    padding: 0;
    margin-top: 100px;

    .ui-modal {
      &__container {
        max-width: 100%;

        .mobile-menu__wrapper {
          height: calc(100vh - 91px);

          .navigation {
            &__list {
              flex-direction: column;
              align-items: flex-start;
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
}
</style>
