<script setup lang="ts"></script>

<template>
  <div>
    <div class="cards">
      <div class="container">
        <div class="cards__row">
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
          <div class="cards__item"><h2>Title</h2></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cards {
  &__row {
    @include row-flex();
  }
  &__item {
    @include hover {
      background: red;
    }
    @include col();
    @include size(3);
    background: green;

    @include desktop {
      @include size(4);
    }

    @include tablet {
      @include size(6);
    }

    @include mobile {
      @include size(12);
    }
  }
}
</style>
