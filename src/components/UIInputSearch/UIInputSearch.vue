<script setup lang="ts">
defineProps<{ value?: string }>();
const emits = defineEmits<{
  (event: 'onInput', payload: string): void;
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits('onInput', target.value);
};
</script>
<template>
  <label class="input-search">
    <input class="input-search__input" type="text" placeholder="Поиск услуг" @input="onInput" :value="value" />
    <div class="input-search__icon">
      <IcSearch :font-controlled="false" :filled="true" />
    </div>
  </label>
</template>
<style lang="scss">
.input-search {
  position: relative;

  &__input {
    padding: 15px 50px 15px 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    color: #b3baba;
    border: 1px solid var(--7, #a7b0b0);
    background: var(--1, #fff);
  }
  &__icon {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
