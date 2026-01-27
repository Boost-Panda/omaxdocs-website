import dynamic from 'next/dynamic';

import { formatPhoneNumber } from '@/lib/utils';
import { companyInfo } from '@/lib/companyInfo';
import { locations } from '@/lib/locations';

import { Mail, Phone } from 'lucide-react';
import { faFacebookF, faInstagram, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), {
  loading: () => <div className="w-4 h-4 bg-primary animate-pulse"></div>,
  ssr: false,
});

const NavbarTop = () => {
  return (
    <div className="bg-primary text-black">
      <div className="flex flex-col lg:flex-row lg:justify-between container mx-auto text-sm py-3 px-4 gap-2">
        {companyInfo.email && (
          <span className="hidden lg:flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
          </span>
        )}
        <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-start">
          {locations.map((location) => (
            <span key={location.name} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${location.phone}`} className="hover:underline">
                <span className="hidden sm:inline">{location.name.replace(', MD', '').replace(', WV', '')}: </span>
                {formatPhoneNumber(location.phone)}
              </a>
            </span>
          ))}
        </div>
        <div className="flex gap-6 justify-center lg:justify-end">
          {companyInfo.social.facebook && (
            <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
            </a>
          )}
          {companyInfo.social.instagram && (
            <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
            </a>
          )}
          {companyInfo.social.youtube && (
            <a href={companyInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
            </a>
          )}
          {companyInfo.social.twitter && (
            <a href={companyInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
