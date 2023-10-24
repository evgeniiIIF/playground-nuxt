<script setup lang="ts">
import AbselLogo from '~/assets/icons/absel-logo.svg';
import BoschLogo from '~/assets/icons/bosch-logo.svg';
import PetronasLogo from '~/assets/icons/petronas-logo.svg';
import TotalLogo from '~/assets/icons/total-logo.svg';
import YokohamaLogo from '~/assets/icons/yokohama-logo.svg';
import ELFLogo from '~/assets/icons/elf-logo.svg';
import HellaLogo from '~/assets/icons/hella-logo.svg';
import MobilLogo from '~/assets/icons/mobil-logo.svg';
import BremboLogo from '~/assets/icons/brembo-logo.svg';
import VartaLogo from '~/assets/icons/varta-logo.svg';

const companiesLogos = [
  AbselLogo,
  BoschLogo,
  PetronasLogo,
  TotalLogo,
  YokohamaLogo,
  ELFLogo,
  HellaLogo,
  MobilLogo,
  BremboLogo,
  VartaLogo,
];
</script>

<template>
  <div class="our-partners">
    <AppContainer>
      <div class="our-partners__wrapper">
        <div class="our-partners__text">
          <h2 class="our-partners__title">Наши партнеры</h2>
          <p class="our-partners__description">Сотрудничаем с мировыми брендами</p>
        </div>
        <div class="our-partners__logos">
          <ul class="our-partners__companies-logos">
            <li v-for="logo in companiesLogos" :key="logo" class="our-partners__company-logo">
              <component :is="logo" :filled="true" />
            </li>
          </ul>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<style lang="scss" scoped>
.our-partners {
  padding: 60px 0 65px 0;
  background-color: #f3f3f3;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 6px;

    @include title-main-bold;
    color: $color-blue;
  }

  &__description {
    color: $color-gray-dark;
  }

  &__companies-logos {
    display: flex;
    flex-wrap: wrap;
    max-width: 790px;
    row-gap: 46px;

    list-style-type: none;
  }

  &__company-logo {
    max-width: 158px;
    max-height: 50px;
    display: flex;
    align-items: center;
    filter: grayscale(100);
    opacity: 0.6;

    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }
  }
}
</style>
