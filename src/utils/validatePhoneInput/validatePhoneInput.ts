const validatePhoneInput = (value: string) => {
  if (value.trim().length < 18) return 'Введите корректный номер телефона';

  return '';
};

export { validatePhoneInput };
