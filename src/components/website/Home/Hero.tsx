import dynamic from 'next/dynamic';
import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

import { companyInfo } from '@/lib/companyInfo';

import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), {
  loading: () => <div className="w-4 h-4 bg-primary animate-pulse"></div>,
  ssr: false,
});

const Hero = memo(function Hero() {
  return (
    <>
      <div className="w-full py-8">
        <div className="flex flex-col items-center justify-center">
          <Image src="/logos/logo.webp" alt="Logo" width={160} height={151} className="w-32 md:w-48" priority />
          <h1 className="text-4xl font-bold max-w-3xl text-center leading-snug mt-4">
            Experience the Artistry of Oral & Maxillofacial Excellence
          </h1>
          <p className="text-2xl text-center mt-4">Welcome to Associated Oral & Maxillofacial Surgeons</p>
          <Link className={buttonVariants({ size: 'lg', className: 'mt-6' })} href={companyInfo.mainCTA.href}>
            {companyInfo.mainCTA.name}
          </Link>
          <div className="flex gap-4 mt-6">
            <Link
              className={buttonVariants({ variant: 'outline' })}
              href={companyInfo.social?.facebook ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4 text-[#1877F2]" />
            </Link>
            <Link
              className={buttonVariants({ variant: 'outline' })}
              href={companyInfo.social?.instagram ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4 text-[#E1306C]" />
            </Link>
          </div>
          <Image
            src="/site-images/team-photo.webp"
            alt="Team Photo"
            width={1200}
            height={1200}
            className="md:rounded-lg mt-12 w-full md:w-auto"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </>
  );
});

export default Hero;
