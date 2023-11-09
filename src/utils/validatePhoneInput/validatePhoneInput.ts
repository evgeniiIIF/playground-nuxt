const validatePhoneInput = (value: string) => {
  if (value.trim().length < 18) return 'Заполните поле полностью';

  return '';
};

export { validatePhoneInput };
