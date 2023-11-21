const validateNameInput = (value: string) => {
  if (value.trim().length < 2) return 'Имя должно состоять из 2 или больше символов';
  if (!value.match(/^[а-я А-Я, a-z A-Z]+$/iu)) return 'Имя не должно содержать цифры и специальные символы';
  if (value.trim().length > 20) return 'В Имени не должно быть больше 20 символов';

  return '';
};

export { validateNameInput };
