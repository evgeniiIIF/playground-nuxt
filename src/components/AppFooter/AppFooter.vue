<script setup lang="ts">
import {
  mockedAboutCompanyFooter,
  mockedAdditionalServicesFooter,
  mockedServicesFooter,
} from '@/components/AppFooter/AppFooter.constant';
import type { AppFooter } from '@/components/AppFooter/AppFooter.types';

defineProps<AppFooter>();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__body">
          <div class="footer__menu">
            <FooterMenu :title="mockedServicesFooter.title" :items="mockedServicesFooter.items" />
          </div>
          <div class="footer__menu">
            <FooterMenu :title="mockedAdditionalServicesFooter.title" :items="mockedAdditionalServicesFooter.items" />
          </div>
          <div class="footer__menu">
            <FooterMenu :title="mockedAboutCompanyFooter.title" :items="mockedAboutCompanyFooter.items" />
          </div>
          <div class="footer__contacts">
            <FooterContacts :contacts="contacts" :socials="socials" />
          </div>
        </div>
        <div class="footer__footer">
          <div class="footer__footer-privacy">
            <p class="footer__footer-privacy-name">{{ contacts.content.copyright }}</p>
            <a class="footer__footer-privacy-policy" link="#">Политика конфиденциальности</a>
          </div>
          <ul class="footer__footer-payment-list">
            <li class="footer__footer-payment-item">
              <IcVisa :font-controlled="false" :filled="true" />
            </li>
            <li class="footer__footer-payment-item">
              <IcMasterCard :font-controlled="false" :filled="true" />
            </li>
            <li class="footer__footer-payment-item">
              <IcMir :font-controlled="false" :filled="true" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 68px 0 20px 0;
  background-color: $color-black-light;

  @include mobile {
    padding: 38px 0 20px 0;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    margin-bottom: 143px;

    @include tablet {
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    @include mobile {
      margin-bottom: 40px;
    }
  }

  &__menu {
    @include tablet {
      flex-basis: 35%;
    }

    @include mobile {
      display: none;
    }
  }

  &__contacts {
    @include tablet {
      flex-basis: 35%;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
      gap: 29px;
    }

    &-privacy {
      max-width: 475px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;

      @include mobile {
        max-width: inherit;
        order: 2;
      }

      &-name {
        @include text-main-xsmall;
        color: $color-gray-dark;
      }

      &-policy {
        @include text-main-xsmall;
        color: $color-gray-dark;
        text-decoration: underline;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          color: $color-white;
        }
      }
    }

    &-payment {
      &-list {
        display: flex;
        list-style-type: none;
        gap: 10px;

        @include mobile {
          order: 1;
          gap: 20px;
        }
      }

      &-item {
        width: 30px;
        height: 20px;
        opacity: 0.5;
        border-radius: 2px;
      }
    }
  }
}
</style>
