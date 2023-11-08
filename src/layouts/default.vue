<script lang="ts" setup>
import AppWidget from '@/components/AppWidget/AppWidget.vue';
</script>

<template>
  <div class="wrapper">
    <AppHeaderMobile />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppWidget />
    <AppFooter v-if="$route.path.split('/').findIndex(item => item === 'services') !== ($route.path.split('/').length - 1)" />
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

  @include tablet {
    margin-top: 100px;
  }

  @include mobile {
    margin-top: 100px;
  }
}
</style>
