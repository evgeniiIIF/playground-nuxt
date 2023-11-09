<script setup lang="ts">
const route = useRoute();

onBeforeMount(() => {
  if (route.path === '/services') {
    document.body.classList.add('services-page');
  }
});
watch(
  () => route.path,
  () => {
    if (route.path === '/services') {
      document.body.classList.add('services-page');
    } else {
      document.body.classList.remove('services-page');
    }
  },
);
</script>
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#00a19c" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss">
.services-page {
  @include to(1280px) {
    main {
      margin-top: 0;
    }
    .header-mobile {
      display: none;
    }
  }
}
</style>
