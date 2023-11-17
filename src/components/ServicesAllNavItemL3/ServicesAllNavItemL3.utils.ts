export const wrapSubstringWithSpan = (originalString?: string, substring?: string) => {
  const regex = new RegExp(substring ?? '', 'gi');
  const result = originalString?.replace(regex, (match) => {
    return `<span class="underline">${match}</span>`;
  });
  return result;
};
