<script setup lang="ts">
import type { UIModalEmits, UIModalProps } from './UIModal.types';
import { bodyLock, bodyUnlock } from './UIModal.utils';

const props = withDefaults(defineProps<UIModalProps>(), {
  closeButton: true,
});
defineEmits<UIModalEmits>();

const UI_MODAL_POSITIONS = {
  center: 'fade-in',
  left: 'fade-left',
  right: 'fade-right',
};

watch(
  () => props.isOpen,
  (isOpen) => {
    isOpen ? bodyLock() : bodyUnlock();
  },
);
</script>

<template>
  <Teleport to="body">
    <Transition :name="UI_MODAL_POSITIONS[position]">
      <div
        v-if="isOpen"
        :class="[
          'ui-modal',
          UI_MODAL_POSITIONS[position],
          withHeader ? 'ui-modal--with-header' : '',
          hasZoom ? 'ui-modal--zoom' : '',
        ]"
      >
        <div class="ui-modal__mask" @click="$emit('onClose')"></div>

        <div class="ui-modal__container">
          <button v-if="closeButton" type="button" class="ui-modal__close" @click="$emit('onClose')">
            <IcClose :font-controlled="false" :filled="true" />
          </button>

          <slot @click.stop></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
$delay: 0.05s;
$during: 0.3s;

.ui-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  padding: 0 16px;

  display: flex;

  @include tablet {
    padding: 0;
  }

  @include mobile {
    padding: 0;
  }

  &.fade-in {
    justify-content: center;
    align-items: center;
  }

  &.fade-left {
    justify-content: flex-start;
  }

  &.fade-right {
    justify-content: flex-end;
  }

  &__mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(54, 54, 54, 0.7);
    cursor: pointer;
  }

  &__container {
    position: relative;
    max-width: 1000px;
    width: 100%;
    height: 100%;

    .fade-in & {
      height: auto;

      @include tablet {
        height: 100%;
      }

      @include mobile {
        height: 100%;
      }
    }

    @include tablet {
      max-width: inherit;
    }

    @include mobile {
      max-width: inherit;
    }
  }

  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 50%;
    border: none;
    background: transparent;
    cursor: pointer;

    svg {
      @include fill-svg-and-path(#000);
    }

    &:hover {
      background: #eee;
    }
  }

  &--zoom {
    .ui-modal {
      &__container {
        width: auto;

        @include tablet {
          height: auto;
        }

        @include mobile {
          height: auto;
        }
      }
    }
  }
}

.fade-in-enter-from,
.fade-left-enter-from,
.fade-right-enter-from,
.fade-in-leave-to,
.fade-left-leave-to,
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(0%);
}

.fade-in-enter-active,
.fade-left-enter-active,
.fade-right-enter-active,
.fade-in-leave-active,
.fade-left-leave-active,
.fade-right-leave-active {
  transition: all 0.3s ease 0s;
}

.fade-in-enter-active .ui-modal__container,
.fade-left-enter-active .ui-modal__container,
.fade-right-enter-active .ui-modal__container,
.fade-in-leave-active .ui-modal__container,
.fade-left-leave-active .ui-modal__container,
.fade-right-leave-active .ui-modal__container {
  transition: all 0.3s ease 0s;
}

.fade-in-enter-from .ui-modal__container,
.fade-in-leave-to .ui-modal__container {
  transform: scale(1.1);
}

.fade-left-enter-from .ui-modal__container,
.fade-left-leave-to .ui-modal__container {
  transform: translateX(-100%);
}

.fade-right-enter-from .ui-modal__container,
.fade-right-leave-to .ui-modal__container {
  transform: translateX(100%);
}
</style>
