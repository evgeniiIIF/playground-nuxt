<script setup lang="ts">
import type { FooterContacts } from '@/components/FooterContacts/FooterContacts.types';

defineProps<FooterContacts>();
</script>

<template>
  <div class="footer-contacts">
    <h3 class="footer-contacts__title">Контакты</h3>
    <ul class="footer-contacts__list">
      <li class="footer-contacts__phone">
        <a class="footer-contacts__phone-link" :href="`tel:${contacts.content.phone}`">{{ contacts.content.phone }}</a>
      </li>
      <li class="footer-contacts__address">
        <p class="footer-contacts__address-text">{{ contacts.content.address }}</p>
        <a class="footer-contacts__address-link" :href="contacts.content.route_link" target="_blank" rel="noopener"
          >проложить маршрут</a
        >
      </li>
      <li class="footer-contacts__working-hours">{{ contacts.content.schedule }}</li>
      <li class="footer-contacts__mail">
        <a class="footer-contacts__mail-link" :href="`mailto:${contacts.content.email}`">{{
          contacts.content.email
        }}</a>
      </li>
      <li class="footer-contacts__socials">
        <ul class="footer-contacts__socials-list">
          <template v-for="social in socials">
            <li v-if="Number(social.is_active_footer) === 1" :key="social.id" class="footer-contacts__socials-item">
              <a
                class="footer-contacts__socials-item-link"
                :href="social.link"
                target="_blank"
                rel="noopener"
                :style="{ backgroundImage: `url('${social.icon_footer}')` }"
              >
              </a>
            </li>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer-contacts {
  &__title {
    margin-bottom: 16px;

    @include title-main-xxsmall-grow;
    color: $color-gray;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style-type: none;

    @include text-main-grow;
    color: $color-white;
  }

  &__phone {
    cursor: pointer;

    &-link {
      text-decoration: none;
      color: $color-white;
      transition: all 0.2s ease;

      &:hover {
        color: $color-second;
      }
    }
  }

  &__address-link {
    @include text-main-xsmall;
    color: $color-gray-dark;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: $color-second;
    }
  }

  &__mail-link {
    cursor: pointer;
    text-decoration: underline;
    color: $color-white;
    transition: all 0.2s ease;

    &:hover {
      color: $color-second;
    }
  }

  &__socials {
    &-list {
      display: flex;
      gap: 10px;
      list-style-type: none;
    }

    &-item {
      &-link {
        width: 40px;
        height: 40px;
        background-color: $color-footer-social-background;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: $color-footer-social-background-hover;
        }
      }
    }
  }
}
</style>
