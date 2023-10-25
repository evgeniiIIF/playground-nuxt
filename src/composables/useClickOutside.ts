import type { Ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

export const useClickOutside = <T extends HTMLDivElement | null>(nodeRef?: Ref<T>, callback?: () => void) => {
  const listener = (event: MouseEvent) => {
    if (!nodeRef?.value) {
      return;
    }

    if (nodeRef?.value !== null && nodeRef.value.contains(event.target as Node)) {
      return;
    }

    callback?.();
  };

  onMounted(() => {
    window.addEventListener('click', listener, true);
  });

  onUnmounted(() => {
    window.removeEventListener('click', listener, true);
  });
};
