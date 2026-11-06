export type Location = {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mapLink?: string;
  hours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  timezone?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  registrationForm?: string;
  referralForm?: string;
}

export interface CompanyInfo {
  name: string;
  phone?: string;
  email?: string;
  website: string;
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  mainCTA: {
    name: string;
    href: string;
  };
  contactForm: string;
  requestAppointmentForm: string;
}

export type NavLink = {
  name: string;
  href?: string;
  external?: boolean;
  children?: NavLink[];
};