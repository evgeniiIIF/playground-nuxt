<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1232px;
  margin: 0 auto;
  padding: 0 16px;

  &--items-centered {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
