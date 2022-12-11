import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return windowWidth;
}

export default useWindowSize;
