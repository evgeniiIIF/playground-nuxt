<template>
  <div class="wrapper">
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
}
</style>
