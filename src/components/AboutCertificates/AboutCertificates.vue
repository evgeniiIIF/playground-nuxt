<script setup lang="ts">
import type { AboutCertificates } from '@/components/AboutCertificates/AboutCertificates.types';
import type {AboutCertificate} from "@/store/about/about.types";

defineProps<AboutCertificates>();
const zoomImageSrc = ref('');
const zoomImageAlt = ref('')

const [isOpenModal, openModal, closeModal] = useBooleanState(false);

const handleClickCertificate = (certificate: AboutCertificate) => {
  zoomImageSrc.value = certificate.image_webp || certificate.image
  zoomImageAlt.value = certificate.image_title || 'Сертификат'
  openModal()
}
</script>

<template>
  <section class="about-certificates">
    <div class="container">
      <div class="about-certificates__wrapper">
        <h2 class="about-certificates__title">{{ aboutCertificates.title }}</h2>
        <p class="about-certificates__subtitle">{{ aboutCertificates.subtitle }}</p>
        <ul class="about-certificates__certificates">
          <li
            v-for="certificate in aboutCertificates.certificates"
            :key="certificate.id"
            class="about-certificates__certificate"
            @click="handleClickCertificate(certificate)"
          >
            <NuxtImg
              class="about-certificates__certificate-image"
              :src="certificate.image_webp || certificate.image"
              :alt="certificate.image_title || 'certificate'"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </div>
    <LazyUIModal :is-open="isOpenModal" position="center" :has-zoom="true" @on-close="closeModal">
      <div class="about-certificates__zoom">
        <NuxtImg
            class="about-certificates__zoom-image"
            :src="zoomImageSrc"
            :alt="zoomImageAlt"
            loading="lazy"
        />
      </div>
    </LazyUIModal>
  </section>
</template>
<style lang="scss">
.about-certificates {
  position: relative;
  padding: 60px 0 80px 0;

  @include mobile {
    padding: 58px 0 28px 0;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    max-width: 1200px;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    background-color: $color-light-gray-lighter;
    content: '';
  }

  &__title {
    margin-bottom: 6px;
    @include title-main-bold;
    color: $color-blue;

    @include mobile {
      margin-bottom: 2px;
      @include title-main-xxsmall-bold;
    }
  }

  &__subtitle {
    margin-bottom: 35px;
    @include text-main;
    color: $color-gray-dark;

    @include mobile {
      margin-bottom: 25px;
    }
  }

  &__certificates {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    list-style-type: none;

    @include mobile {
      padding-bottom: 20px;
      flex-wrap: nowrap;
      justify-content: inherit;
      overflow-x: auto;

      @include scrollbar-x;
    }
  }

  &__certificate {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 285px;
    min-width: 135px;
    cursor: pointer;

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__zoom {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;

    &-image {
      max-width: 550px;
      width: 100%;
    }
  }
}
</style>
