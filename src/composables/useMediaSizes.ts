export const useMediaSizes = () => {
  const { breakpoint, isLessThan } = useViewport();

  const isMobile = computed(() => breakpoint.value === 'mobile');
  const isTablet = computed(() => breakpoint.value === 'tablet');
  const isDesktop = computed(() => breakpoint.value === 'desktop');
  const isLessThanDesktop = computed(() => isLessThan('tablet'));

  return {
    isDesktop,
    isMobile,
    isTablet,
    isLessThanDesktop,
  };
};
