<script lang="ts" setup>
import type { Contacts } from '@/store/contacts/contacts.types';

defineProps<{
  isOpenServicesAllModal: boolean;
  contacts: Contacts;
}>();
defineEmits<{ (event: 'toggleServicesAllModal'): void }>();

const headerColorIsDark = computed(() => {
  const isDark = useRoute().path === '/';
  return isDark;
});

const headerClass = computed(() => {
  return headerColorIsDark.value ? '' : 'header--light';
});

const [isOpenModal, openModal, closeModal] = useBooleanState(false);

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<template>
  <header class="header" :class="headerClass">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__logo" to="/" @click="scrollToTop">
          <IcLogo v-if="headerColorIsDark" :font-controlled="false" :filled="true" />
          <IcLogoDark v-else :font-controlled="false" :filled="true" />
        </NuxtLink>
        <div class="header__navigation">
          <AppNavigation
            :is-open-services-all-modal="isOpenServicesAllModal"
            @toggleServicesAllModal="$emit('toggleServicesAllModal')"
          />
        </div>
        <div class="header__contacts">
          <div class="header__calls">
            <a class="header__calls-phone" :href="`tel:${contacts.content.phone}`" rel="noopener">{{
              contacts.content.phone
            }}</a>
            <span class="header__calls-callback" @click="openModal">обратный звонок</span>
          </div>
          <a
            class="header__whatsapp"
            href="https://api.whatsapp.com/send/?phone=79283152020"
            target="_blank"
            rel="noopener"
          >
            <IcWhatsapp :font-controlled="false" :filled="true" />
          </a>
        </div>
      </div>
    </div>
    <UIModal :is-open="isOpenModal" position="center" @on-close="closeModal">
      <AppCallbackForm title="Обратный звонок" />
    </UIModal>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  background: #000;
  padding: 35px 0;
  color: #fff;

  @include text-main-big;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__contacts {
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    gap: 15px;
  }

  &__calls {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &-phone {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      color: $color-white;
      text-decoration: none;
    }

    &-callback {
      @include text-main-small;

      line-height: 14px;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__whatsapp {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #868789;
    border-radius: 50%;
    text-decoration: none;
  }

  &--light {
    background: $color-white;
    color: $color-blue;

    .header {
      &__calls-phone {
        color: $color-blue;
      }

      &__whatsapp {
        svg {
          @include fill-svg-and-path($color-second);
        }
      }
    }
  }
}
</style>
