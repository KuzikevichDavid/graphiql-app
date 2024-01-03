import { useEffect, useState } from 'react';

export default function useHeaderScroll(menu?: boolean) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (menu) return undefined;

    setScroll(Boolean(window.scrollY));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 50) {
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
