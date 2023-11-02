export type UIDropdownTypes = {
  title: string;
  items: string[];
  value?: string;
  placeholder?: string;
};

export interface UIDropdownEmits {
  (event: 'onSelectItem', name: string): void;
}
