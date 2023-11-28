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
    @include tablet {
      @include row-flex();
    }
  }
  &__item {
    border: 1px solid #000;
    background: green;
    @include media($xs) {
      background: red;
    }

    @include hover {
      background: red;
    }

    @include tablet {
      @include col();
      @include size(6);
    }

    @include desktop {
      @include size(4);
    }
  }
}
</style>
