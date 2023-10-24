<script lang="ts" setup>
import bmw from '~/assets/icons/bmw.svg';
import volvo from '~/assets/icons/volvo.svg';
import nissan from '~/assets/icons/nissan.svg';
import renault from '~/assets/icons/renault.svg';
import audi from '~/assets/icons/audi.svg';
import toyota from '~/assets/icons/toyota.svg';
import citroen from '~/assets/icons/citroen.svg';
import opel from '~/assets/icons/opel.svg';
import lada from '~/assets/icons/lada.svg';
import mercedesBenz from '~/assets/icons/mercedes-benz.svg';
import kia from '~/assets/icons/kia.svg';
import ford from '~/assets/icons/ford.svg';
import hyundai from '~/assets/icons/hyundai.svg';
import landRover from '~/assets/icons/land-rover.svg';

const marques = [
  volvo,
  nissan,
  renault,
  audi,
  bmw,
  toyota,
  citroen,
  opel,
  lada,
  mercedesBenz,
  kia,
  ford,
  hyundai,
  landRover,
];
</script>

<template>
  <section class="auto-brands">
    <div class="auto-brands__wrapper">
      <div class="auto-brands__content">
        <ul class="auto-brands__list">
          <li v-for="marque in marques" :key="marque" class="auto-brands__item">
            <component :is="marque" :font-controlled="false" :filled="true" />
          </li>
        </ul>
        <ul class="auto-brands__list">
          <li v-for="marque in marques" :key="marque" class="auto-brands__item">
            <component :is="marque" :font-controlled="false" :filled="true" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.auto-brands {
  padding: 15px 0;
  background-color: #262727;

  &__wrapper {
    width: 100%;
    overflow: hidden;
  }

  &__content {
    position: relative;
    width: 200%;
    display: flex;
    align-items: center;
    gap: 70px;

    animation: move 30s infinite linear;

    @keyframes move {
      0% {
        left: 0;
      }

      25% {
        left: -25%;
      }

      50% {
        left: -50%;
      }

      75% {
        left: -75%;
      }

      100% {
        left: -99.5%;
      }
    }
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 70px;

    list-style-type: none;
  }
}
</style>
