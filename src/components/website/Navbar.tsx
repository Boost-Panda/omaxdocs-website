import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { NavbarDesktop, NavbarMobile, NavbarTop } from '@/components/website/DynamicImports';

import { companyInfo } from '@/lib/companyInfo';

const Navbar = () => {
  return (
    <header className="top-0 z-10 bg-white sticky border-b">
      <NavbarTop />

      <div className="h-20 flex md:flex items-center justify-between gap-4 px-4 container mx-auto">
        <div className="hidden lg:block">
          <NavbarDesktop />
        </div>
        <Link href="/" className="lg:hidden">
          <Image src="/logos/logo.webp" alt="logo" width={60} height={57} loading="lazy" />
        </Link>
        <div className="ml-auto">
          <Button className="shrink-0">
            <Link href={companyInfo.mainCTA.href} target="_blank">
              {companyInfo.mainCTA.name}
            </Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
