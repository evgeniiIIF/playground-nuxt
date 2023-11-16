<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import AppWidget from '@/components/AppWidget/AppWidget.vue';
import { useContactsStore } from '@/store/contacts';
import type { Contacts } from '@/store/contacts/contacts.types';
import { useMenuStore } from '@/store/menu';

type ErrorType = {
  message: string;
  stack: string;
  statusCode: number;
  statusMessage: string;
  url: string;
};

type ErrorPage = {
  error: ErrorType;
};

defineProps<ErrorPage>();

const { contactsState, contactsEffects } = useContactsStore();
const { menuState, menuEffects } = useMenuStore();

await useAsyncData('error', async () => {
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
    <ServicesAllModal
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
      <section class="error-page">
        <div class="container">
          <div class="error-page__wrapper">
            <div class="error-page__info">
              <h1 class="error-page__title">Страница не найдена</h1>
              <p class="error-page__description">
                {{
                  error.statusCode === 404
                    ? 'Такой страницы не существует, или она была удалена.'
                    : 'На сайте произошла ошибка. Обновите страницу либо перейдите на главную.'
                }}
              </p>
              <div class="error-page__button">
                <UIButton text="Перейти на главную" :is-filled="true" link="/" />
              </div>
            </div>
            <div class="error-page__status">
              <h2 class="error-page__status-code">{{ error.statusCode }}</h2>
              <div v-if="error.statusCode === 404" class="error-page__status-image-container">
                <NuxtImg class="error-page__status-image" src="/images/error-car.png" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceForm />
    </main>
    <AppWidget v-if="Number(contacts.content.is_active_widget) === 1" :widget-socials="widgetSocials" />
    <AppFooter
      :contacts="contacts"
      :socials="socials"
      :services-menu="footerServicesMenu"
      :additional-services-menu="footerAdditionalServicesMenu"
      :about-company-menu="footerAboutCompanyMenu"
    />
  </div>
</template>

<style lang="scss">
.error-page {
  padding: 79px 0 74px 0;

  @include tablet {
    padding: 50px 0 50px 0;
  }

  @include mobile {
    padding: 50px 0 50px 0;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @include tablet {
      flex-direction: column;
    }

    @include mobile {
      flex-direction: column;
    }
  }

  &__info {
    @include tablet {
      order: 2;
    }

    @include mobile {
      order: 2;
    }
  }

  &__title {
    margin-bottom: 16px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      @include title-main-xxsmall-bold;
    }
  }

  &__description {
    max-width: 390px;
    margin-bottom: 40px;
    @include text-main;
    color: $color-gray-dark;
  }

  &__button {
    max-width: 212px;
  }

  &__status {
    position: relative;

    @include tablet {
      order: 1;
    }

    @include mobile {
      order: 1;
    }

    &-code {
      @include error-page-text;
      color: $color-blue;

      @include media-range($desktop-form, $screen-medium-min) {
        font-size: 350px;
      }

      @include tablet {
        font-size: 90px;
        line-height: 90px;
      }

      @include mobile {
        font-size: 90px;
        line-height: 90px;
      }
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &-container {
        position: absolute;
        top: 50%;
        left: 49%;
        max-width: 356px;
        max-height: 210px;
        width: 100%;
        height: 100%;
        display: flex;
        transform: translate(-50%, -50%) rotate(90deg);

        @include tablet {
          display: none;
        }

        @include mobile {
          display: none;
        }
      }
    }
  }
}

main {
  margin-top: 114px;
  flex: 1 1 auto;

  @include tablet {
    margin-top: 100px;
  }

  @include mobile {
    margin-top: 100px;
  }
}
</style>
