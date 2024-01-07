import { useEffect, useState } from 'react';
import HEADER_SCROLL_HEIGHT from '@/styles/constants';

export default function useHeaderScroll(menu?: boolean) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (menu) return undefined;

    setScroll(Boolean(window.scrollY));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= HEADER_SCROLL_HEIGHT) {
        setScroll(Boolean(window.scrollY));
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menu]);

  return { scroll };
}
