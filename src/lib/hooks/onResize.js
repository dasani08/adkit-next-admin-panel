import { useEffect } from 'react';

const useOnResize = (onResize) => {
  useEffect(() => {
    const handleResize = (event) => {
      onResize(event);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);
};

export default useOnResize;
