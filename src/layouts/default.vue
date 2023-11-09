<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

import AppWidget from '@/components/AppWidget/AppWidget.vue';

const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="wrapper">
    <AppHeader v-show="!isMobile" />
    <AppHeaderMobile v-show="isMobile" />
    <main>
      <slot />
    </main>
    <AppWidget />
    <AppFooter
      v-if="$route.path.split('/').findIndex((item) => item === 'services') !== $route.path.split('/').length - 1"
    />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: inherit;
  overflow-x: hidden;
  overflow-y: auto;
}
main {
  margin-top: 114px;
  flex: 1 1 auto;

  @include tablet {
    margin-top: 91px;
  }

  @include mobile {
    margin-top: 91px;
  }
}
</style>
