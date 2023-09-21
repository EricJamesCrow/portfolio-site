// ScrollUp.tsx
import { useEffect } from 'react';

const ScrollUp: React.FC = () => {
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollUp;
