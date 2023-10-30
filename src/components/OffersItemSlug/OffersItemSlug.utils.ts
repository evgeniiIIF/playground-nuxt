export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.toLocaleString('ru-RU', { month: 'short' });
  const day = date.getDate();

  return `Опубликовано ${day} ${month} ${year} года`;
};
