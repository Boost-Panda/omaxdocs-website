import { NavLink } from '@/lib/types';

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    children: [
      {
        name: 'Dr Nelson',
        href: '/about/dr-nelson',
      },
      {
        name: 'Dr. Chaudhary',
        href: '/about/dr-chaudhary',
      },
      {
        name: 'Dr. Khan',
        href: '/about/dr-khan',
      },
      {
        name: 'Dr. Crayton',
        href: '/about/dr-crayton',
      },
      {
        name: 'Meet our Staff',
        href: '/about/meet-our-staff',
      },
    ],
  },
  {
    name: 'Services',
    children: [
      {
        name: 'Sedation Dentistry',
        href: '/services/sedation-dentistry',
      },
      {
        name: 'Leisons & Cancer of the Mouth',
        children: [
          {
            name: 'Oral Pathology',
            href: '/services/oral-pathology',
          },
        ],
      },
      {
        name: 'Oral Surgery',
        children: [
          {
            name: 'Wisdom Tooth Removal',
            href: '/services/wisdom-tooth-removal',
          },
          {
            name: 'Apicoectomy',
            href: '/services/apicoectomy',
          },
          {
            name: 'Facial Fractures',
            href: '/services/facial-fractures',
          },
          {
            name: 'Facial Trauma',
            href: '/services/facial-trauma',
          },
        ],
      },
      {
        name: 'Pediatric Oral Surgery',
        children: [
          {
            name: 'Frenectomy',
            href: '/services/frenectomy',
          },
          {
            name: 'Canine Exposure',
            href: '/services/canine-exposure',
          },
          {
            name: 'Tongue Tie',
            href: '/services/tongue-tie',
          },
          {
            name: 'Lip Tie',
            href: '/services/lip-tie',
          },
        ],
      },
      {
        name: 'Dental Implants and Bone Grafts',
        children: [
          {
            name: 'Immediate Implant Placement',
            href: '/services/immediate-implant-placement',
          },
          {
            name: 'Implant-Supported Dentures',
            href: '/services/implant-supported-dentures',
          },
          {
            name: 'Platelet-Rich Plasma',
            href: '/services/platelet-rich-plasma',
          },
          {
            name: '3D Imaging',
            href: '/services/3d-imaging',
          },
          {
            name: 'Bone Grafting',
            href: '/services/bone-grafting',
          },
          {
            name: 'Dental Implants',
            href: '/services/dental-implants',
          },
          {
            name: 'Full Mouth Reconstruction',
            href: '/services/full-mouth-reconstruction',
          },
          {
            name: 'Single Implants',
            href: '/services/single-implants',
          },
          {
            name: 'Multiple Dental Implants',
            href: '/services/multiple-dental-implants',
          },
        ],
      },
    ],
  },
  {
    name: 'Patient Resources',
    children: [
      {
        name: 'Patient Registration',
        href: '/patient-resources/patient-registration',
      },
      {
        name: 'CareCredit',
        href: 'https://www.carecredit.com/',
        external: true,
      },
      {
        name: 'Surgical Instructions',
        href: '/patient-resources/surgical-instructions',
      },
    ],
  },
  {
    name: 'Patient Information',
    children: [
      {
        name: 'Introduction',
        href: '/information/introduction',
      },
      {
        name: 'New Patient Info',
        href: '/information/new-patient-info',
      },
      {
        name: 'Insurance',
        href: '/information/insurance',
      },
      {
        name: 'Financial Policy',
        href: '/information/financial-policy',
      },
      {
        name: 'Privacy Policy Info',
        href: '/information/privacy-policy',
      },
      {
        name: 'Educational Videos',
        href: '/information/educational-videos',
      },
    ],
  },
  {
    name: 'Referral Forms',
    href: '/referral-forms',
  },
  {
    name: 'Contact',
    children: [
      {
        name: 'Our Locations',
        href: '/contact/all-locations',
      },
      {
        name: 'Contact Info',
        href: '/contact/contact-info',
      },
    ],
  },
];
