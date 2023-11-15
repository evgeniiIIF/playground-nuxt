<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import { useContactsStore } from '@/store/contacts';
import AppWidget from '@/components/AppWidget/AppWidget.vue';
import type { Contacts } from '@/store/contacts/contacts.types';
import { useMenuStore } from '@/store/menu';

const { contactsState, contactsEffects } = useContactsStore();
const { menuState, menuEffects } = useMenuStore();

await useAsyncData('layout', async () => {
  await Promise.all([
    Object.keys(contactsState.value.contacts).length === 0 && contactsEffects.fetchContacts(),
    contactsState.value.socials.length === 0 && contactsEffects.fetchContactsSocials(),
    contactsState.value.widget.length === 0 && contactsEffects.fetchContactsWidget(),
    menuState.value.headerMenu.length === 0 && menuEffects.fetchHeaderMenu(),
    menuState.value.footerServicesMenu.length === 0 && menuEffects.fetchFooterServicesMenu(),
    menuState.value.footerAdditionalServicesMenu.length === 0 && menuEffects.fetchFooterAdditionalServicesMenu(),
    menuState.value.footerAboutCompanyMenu.length === 0 && menuEffects.fetchFooterAboutCompanyMenu(),
  ]);
});

const contacts = contactsState.value.contacts as Contacts;
const socials = contactsState.value.socials;
const widgetSocials = contactsState.value.widget;
const headerMenu = menuState.value.headerMenu;
const footerServicesMenu = menuState.value.footerServicesMenu;
const footerAdditionalServicesMenu = menuState.value.footerAdditionalServicesMenu;
const footerAboutCompanyMenu = menuState.value.footerAboutCompanyMenu;

const { isDesktop } = useMediaSizes();

const [isOpenServicesAllModal, , closeServicesAllModal, toggleServicesAllModal] = useBooleanState(false);
const [isOpenMobileMenu, openMobileMenu, closeMobileMenu, toggleMobileMenu] = useBooleanState(false);
</script>

<template>
  <div class="wrapper">
    <AppHeader
      v-if="isDesktop"
      :contacts="contacts"
      :menu="headerMenu"
      :is-open-services-all-modal="isOpenServicesAllModal"
      @toggle-services-all-modal="toggleServicesAllModal"
    />
    <LazyServicesAllModal
      v-show="isOpenServicesAllModal"
      @closeServicesAllModal="closeServicesAllModal"
      @closeMobileMenu="closeMobileMenu"
    />
    <AppHeaderMobile
      v-if="!isDesktop"
      :contacts="contacts"
      :socials="socials"
      :menu="headerMenu"
      :is-open-services-all-modal="isOpenServicesAllModal"
      :is-open-mobile-menu="isOpenMobileMenu"
      @toggleServicesAllModal="toggleServicesAllModal"
      @openMobileMenu="openMobileMenu"
      @closeMobileMenu="closeMobileMenu"
      @toggleMobileMenu="toggleMobileMenu"
    />
    <main>
      <slot />
    </main>
    <AppWidget v-if="Number(contacts.content.is_active_widget) === 1" :widget-socials="widgetSocials" />
    <AppFooter
      v-if="$route.path.split('/').findIndex((item) => item === 'services') !== $route.path.split('/').length - 1"
      :contacts="contacts"
      :socials="socials"
      :services-menu="footerServicesMenu"
      :additional-services-menu="footerAdditionalServicesMenu"
      :about-company-menu="footerAboutCompanyMenu"
    />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: inherit;
}
main {
  margin-top: 114px;
  flex: 1 1 auto;
  @include to(1280px) {
    margin-top: 91px;
  }

  @include tablet {
    margin-top: 91px;
  }

  @include mobile {
    margin-top: 91px;
  }
}
</style>
