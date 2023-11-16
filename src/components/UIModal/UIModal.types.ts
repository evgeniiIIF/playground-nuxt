export interface UIModalProps {
  position: 'left' | 'right' | 'center';
  isOpen?: boolean;
  closeButton?: boolean;
  withHeader?: boolean;
  hasZoom?: boolean;
}

export interface UIModalEmits {
  (event: 'onClose'): void;
}
