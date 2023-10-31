export interface UIModalProps {
  isOpen?: boolean;
  position: 'right' | 'center';
}

export interface UIModalEmits {
  (event: 'onClose'): void;
}
