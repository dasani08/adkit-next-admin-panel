import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export default function useTableScroll() {
  const screens = useBreakpoint();
  const screenSize = {
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
  };

  if (screens.xs) return screenSize.xs;
  if (screens.sm) return screenSize.sm;
  if (screens.md) return screenSize.md;
  if (screens.lg) return screenSize.lg;
  if (screens.xl) return screenSize.xl;
  if (screens.xxl) return screenSize.xxl;
}
