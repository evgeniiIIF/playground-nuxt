<script lang="ts" setup></script>

<template>
  <div class="wrapper">
    <AppHeaderMobile />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
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
