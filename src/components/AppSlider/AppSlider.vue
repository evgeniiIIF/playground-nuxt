<script setup lang="ts">
import type { AppSlider } from '@/components/AppSlider/AppSlider.types';

const props = defineProps<AppSlider>();

const { isMobile } = useMediaSizes();

const sliderNode = ref();
const sliderRowNode = ref();

const currentSlideIndex = ref(0);
const offsetWidth = ref(0);

const setOffsetWidth = () => {
  const slide = sliderNode.value?.querySelector('.app-slider__slide:not(.app-slider__slide--active)');
  const currentHeight = sliderRowNode.value.offsetHeight;
  offsetWidth.value = (slide.offsetWidth ?? 0) * currentSlideIndex.value;

  nextTick(() => {
    sliderRowNode.value.style.height = `${currentHeight}px`;
    sliderRowNode.value.style.transform = `translateX(-${offsetWidth.value}px)`;
  });
};

const goNext = () => {
  props.galleryItems && props.galleryItems.length && currentSlideIndex.value + 1 >= props.galleryItems?.length
    ? (currentSlideIndex.value = 0)
    : (currentSlideIndex.value += 1);

  setOffsetWidth();
};

const goBack = () => {
  props.galleryItems && props.galleryItems.length && currentSlideIndex.value <= 0
    ? (currentSlideIndex.value = props.galleryItems.length - 1)
    : (currentSlideIndex.value -= 1);

  setOffsetWidth();
};
</script>

<template>
  <div v-if="!isMobile" ref="sliderNode" class="app-slider">
    <div class="app-slider__top">
      <h4 class="app-slider__title">Примеры работ</h4>

      <div class="app-slider__buttons">
        <UIArrowButton :arrow-direction="'left'" @click="goBack" />
        <UIArrowButton :arrow-direction="'right'" @click="goNext" />
      </div>
    </div>
    <div ref="sliderRowNode" class="app-slider__row">
      <div
        v-for="(image, index) in galleryItems"
        :key="index"
        :class="['app-slider__slide', index === currentSlideIndex ? 'app-slider__slide--active' : '']"
      >
        <div class="app-slider__image ibg">
          <NuxtImg :src="image?.path" fit="contain" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="app-slider app-slider--mobile">
    <div class="app-slider__top">
      <h4 class="app-slider__title">Примеры работ</h4>
    </div>
    <div class="app-slider__row">
      <div v-for="(image, index) in galleryItems" :key="index" :class="['app-slider__slide']">
        <div class="app-slider__image ibg">
          <NuxtImg :src="image?.path" fit="contain" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-slider {
  overflow: hidden;

  &__top {
    display: flex;
    justify-content: space-between;
    padding: 26px 0;
  }

  &__title {
    color: var(--Black, #18243c);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px; /* 133.333% */
  }
  &__buttons {
    display: flex;
    @include mr(20px);
  }
  &__row {
    display: flex;
    align-items: center;
    margin-right: -20px;
    transition: transform 0.3s ease 0s;
  }

  &__slide {
    flex: 0 0 25%;
    padding-right: 20px;
    transition: all 0.3s ease 0s;

    .app-slider__image {
      transition: all 0.3s ease 0s;

      padding-top: 94.7368421%;
      filter: grayscale(100);
    }
  }

  &__image {
    img {
      width: 100%;
    }
  }

  &__slide--active {
    flex: 0 0 50%;
    .app-slider__image {
      filter: grayscale(0);

      padding-top: 59.3220339%;
    }
  }
}

.app-slider.app-slider--mobile {
  .app-slider__row {
    overflow-y: auto;
  }
  .app-slider__slide {
    flex: 0 0 78%;
  }
  .app-slider__image {
    filter: grayscale(0);
    padding-top: 73.518518%;
  }
}
</style>
