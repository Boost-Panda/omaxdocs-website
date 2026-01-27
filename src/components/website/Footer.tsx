import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { companyInfo } from '@/lib/companyInfo';
import { formatPhoneNumber } from '@/lib/utils';

import { locations } from '@/lib/locations';

import { faFacebookF, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), {
  loading: () => <div className="w-6 h-6 bg-primary animate-pulse"></div>,
  ssr: false,
});

const Footer = memo(function Footer() {
  return (
    <footer className="bg-black text-white p-12 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          <div className="flex flex-col items-center">
            <Image src="/logos/logo-white.png" alt={companyInfo.name} width={240} height={240} />
            <div className="mb-6 mt-6 space-y-1">
              {companyInfo.phone && (
                <>
                  <a href={`tel:${companyInfo.phone}`}>{formatPhoneNumber(companyInfo.phone)}</a>
                  <br />
                </>
              )}
              {companyInfo.email && (
                <>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                  <br />
                </>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-8">Locations</h3>
            {locations.map((location) => (
              <div key={location.name} className="space-y-2 mb-12">
                <h4 className="font-bold">{location.name}</h4>
                <p>
                  {location.street}, {location.city}, {location.state} {location.zip}
                </p>
                <p>
                  <a href={`tel:${location.phone}`} className="underline">
                    {formatPhoneNumber(location.phone)}
                  </a>
                  <br />
                  <a href={`mailto:${location.email}`} className="underline">
                    {location.email}
                  </a>
                  <br />
                  <a href={location.mapLink} className="underline" target="_blank">
                    View Map
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center justify-start gap-10 my-6">
              {companyInfo.social.facebook && (
                <a href={companyInfo.social.facebook} className="flex items-center gap-2" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 text-white" />
                </a>
              )}
              {companyInfo.social.instagram && (
                <a href={companyInfo.social.instagram} className="flex items-center gap-2" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-white" />
                </a>
              )}
              {companyInfo.social.youtube && (
                <a href={companyInfo.social.youtube} className="flex items-center gap-2" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} className="h-6 w-6 text-white" />
                </a>
              )}
              {companyInfo.social.twitter && (
                <a href={companyInfo.social.twitter} className="flex items-center gap-2" aria-label="X (Twitter)">
                  <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6 text-white" />
                </a>
              )}
            </div>
            <ul className="space-y-2 mt-12">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/accessibility-statement">Accessibility Statement</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-12 border-white/30" />
        <p className="text-sm text-white/70">
          Copyright &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
