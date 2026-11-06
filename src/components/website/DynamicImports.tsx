'use client';

import dynamic from 'next/dynamic';

// Next allows `ssr: false` only in Client Components, so Server Components import these from here.

export const ClientSideComponents = dynamic(() => import('@/components/website/Home/ClientSideComponents'), {
  ssr: false,
});

export const Footer = dynamic(() => import('@/components/website/Footer'), {
  ssr: false,
});

export const NavbarTop = dynamic(() => import('@/components/website/NavbarTop'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const NavbarDesktop = dynamic(() => import('@/components/website/NavbarDesktop'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const NavbarMobile = dynamic(() => import('@/components/website/NavbarMobile'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon),
  {
    loading: () => <div className="w-4 h-4 bg-primary animate-pulse"></div>,
    ssr: false,
  },
);
