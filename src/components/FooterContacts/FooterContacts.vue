<script setup lang="ts"></script>

<template>
  <div class="footer-contacts">
    <h3 class="footer-contacts__title">Контакты</h3>
    <ul class="footer-contacts__list">
      <li class="footer-contacts__phone">
        <a class="footer-contacts__phone-link" href="tel:88652500520">+7 (8652) 500-520</a>
      </li>
      <li class="footer-contacts__address">
        <p class="footer-contacts__address-text">г. Ставрополь, ул. Доваторцев 47Б</p>
        <a
          class="footer-contacts__address-link"
          href="https://yandex.ru/maps/?rtext=~45.01151530529911%2C41.929150298237595"
          target="_blank"
          rel="noopener"
          >проложить маршрут</a
        >
      </li>
      <li class="footer-contacts__working-hours">пн-сб 9:00-19:00, вс 10:00-16:00</li>
      <li class="footer-contacts__mail">
        <a class="footer-contacts__mail-link" href="mailto:info@abs-autoservice.ru">abs-auto@mail.ru</a>
      </li>
      <li class="footer-contacts__socials">
        <ul class="footer-contacts__socials-list">
          <li class="footer-contacts__socials-item">
            <a
              class="footer-contacts-socials-item-link"
              href="https://vk.com/absautocervice"
              target="_blank"
              rel="noopener"
            >
              <IcVkBlock :font-controlled="false" :filled="true" />
            </a>
          </li>
          <li class="footer-contacts__socials-item">
            <a class="footer-contacts-socials-item-link" href="#" target="_blank" rel="noopener">
              <IcInstagram :font-controlled="false" :filled="true" />
            </a>
          </li>
          <li class="footer-contacts__socials-item">
            <a class="footer-contacts-socials-item-link" href="#" target="_blank" rel="noopener">
              <IcFacebook :font-controlled="false" :filled="true" />
            </a>
          </li>
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
      width: 40px;
      height: 40px;
      cursor: pointer;

      &-link {
        color: $color-blue;
      }
    }
  }
}
</style>
