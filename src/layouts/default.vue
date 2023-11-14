<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import { useContactsStore } from '@/store/contacts';
import AppWidget from '@/components/AppWidget/AppWidget.vue';
import type { Contacts } from '@/store/contacts/contacts.types';

const { contactsState, contactsEffects } = useContactsStore();

await useAsyncData('layout', async () => {
  await Promise.all([
    Object.keys(contactsState.value.contacts).length === 0 && contactsEffects.fetchContacts(),
    contactsState.value.socials.length === 0 && contactsEffects.fetchContactsSocials(),
    contactsState.value.widget.length === 0 && contactsEffects.fetchContactsWidget(),
  ]);
});

const contacts = contactsState.value.contacts as Contacts;
const socials = contactsState.value.socials;
const widgetSocials = contactsState.value.widget;

const { isDesktop } = useMediaSizes();

const [isOpenServicesAllModal, , closeServicesAllModal, toggleServicesAllModal] = useBooleanState(false);

const [isOpenMobileMenu, openMobileMenu, closeMobileMenu, toggleMobileMenu] = useBooleanState(false);
</script>

<template>
  <div class="wrapper">
    <AppHeader
      v-if="isDesktop"
      :contacts="contacts"
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
