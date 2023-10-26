export const getHeaderHeight = () => {
  const header = document.querySelector('header');

  if (header) {
    const heightHeader = window.getComputedStyle(header).height;
    return heightHeader;
  }
  return 0;
};
