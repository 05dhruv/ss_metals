// Single place for company details. Edit here and the whole site updates.
export const SITE = {
  name: 'SS Metals',
  est: 2000,
  tagline: 'Stainless Steel Utensils & Kalvat Manufacturers, Moradabad',
  description:
    'SS Metals (Est. 2000) – manufacturers of stainless steel unfinished (Kalvat) utensils, barwares and bathwares, and raw material stockiest in Moradabad.',
  email: 'ssmetals2000@gmail.com',
  address: '19, Chitraguptnagar, Near Park, Shivpuri, Katghar, Moradabad, Uttar Pradesh, 244001, India',
  addressShort: '19, Chitraguptnagar, Katghar, Moradabad, UP',
  whatsapp: '919412236335',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/company-profile', label: 'Company Profile' },
  { href: '/products', label: 'Products' },
  { href: '/ready-stock', label: 'Ready Stock' },
  { href: '/infrastructure', label: 'Infrastructure' },
  { href: '/contact', label: 'Enquiry & Contact' },
];

export const GRADES = ['JSLU', 'J4', '304', '316', '410', '430'];



// Counters on the home page – confirm these numbers with the client.
export const STATS = [
  { value: 50, suffix: '+', label: 'Export clients' },
  { value: 40, suffix: '+', label: 'OEM brands served' },
  { value: 35000, suffix: '+', label: 'Pieces produced per day' },
  { value: 150, suffix: '+', label: 'Skilled workers' },
];

export const INFRA = [
  { src: '/img/infrastructure/infra-aerial-1.jpg', caption: 'Plant aerial view, Moradabad' },
  { src: '/img/infrastructure/infra-plant-1.jpg', caption: 'Factory floor' },
  { src: '/img/infrastructure/infra-plant-2.jpg', caption: 'Heavy deep draw press lines' },
  { src: '/img/infrastructure/infra-stacking.jpg', caption: 'Unfinished Kalvat storage and quality staging' },
  { src: '/img/infrastructure/infra-dispatch.jpg', caption: 'Dispatch warehouse' },
  { src: '/img/infrastructure/infra-testing.jpg', caption: 'In-house metallurgical and dimensional testing' },
];

export function waLink(text = 'Hello SS Metals, I want to inquire about your products') {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
