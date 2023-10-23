export const useMediaSizes = () => {
  const breakpoints = useBreakpoints({
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
  });

  const isMobile = breakpoints.smaller('mobile');
  const isTablet = breakpoints.between('tablet', 'desktop');
  const isDesktop = breakpoints.greater('desktop');

  return {
    breakpoints,
    isDesktop,
    isMobile,
    isTablet,
  };
};
