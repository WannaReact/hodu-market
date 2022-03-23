import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

interface hookProps {
  query: string;
}

function useBreakpoint(settings: hookProps) {
  const [mounted, setMounted] = useState(false);
  const value = useMediaQuery(settings);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? value : false;
}

export default useBreakpoint;
