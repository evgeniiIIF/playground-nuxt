export type UIInputTypes = {
  title: string;
  type: 'phone' | 'text';
  modelValue: string;
  errorMessage?: string;
  disabled?: boolean;
};

export type UIInputEmits = (event: 'update:modelValue', value: string) => string;
