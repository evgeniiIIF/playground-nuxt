export type UIInputTypes = {
  title: string;
  modelValue: string;
  disabled: boolean;
  type: 'phone' | 'text';
};

export type UIInputEmits = (event: 'update:modelValue', value: string) => string;
