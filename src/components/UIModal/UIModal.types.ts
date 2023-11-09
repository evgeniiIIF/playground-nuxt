export interface UIModalProps {
  isOpen?: boolean;
  position: 'left' | 'right' | 'center';
  closeButton?: boolean;
}

export interface UIModalEmits {
  (event: 'onClose'): void;
}
