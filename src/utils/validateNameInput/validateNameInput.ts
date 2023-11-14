const validateNameInput = (value: string) => {
  if (value.trim().length < 2) return 'Имя должно состоять из 2 или больше символов';
  if (!value.match(/^[а-я А-Я, a-z A-Z]+$/iu)) return 'Имя не должно содержать цифры и символы';

  return '';
};

export { validateNameInput };
