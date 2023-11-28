<script lang="ts" setup></script>

<template>
  <div class="wrapper">
    <header class="header-test">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam id aut, sunt corrupti voluptatem voluptas
        fugiat explicabo fuga officia dolor laudantium minus laborum. Deserunt quam molestias repellendus totam
        molestiae iure.
      </p>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.header-test {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  background: yellow;
}

main {
  margin-top: 100px;
  flex: 1 1 auto;
}
</style>
