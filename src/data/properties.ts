export interface Property {
  id: string;
  name: string;
  development: string;
  location: string;
  bedrooms: string;
  sqm: string;
  price: number;
  image: string;
  features: string[];
  type: 'apartment' | 'penthouse';
}

export const properties: Property[] = [
  {
    id: 'al-alyaa-2to3bed',
    name: 'Al Alyaa Residences - 2 to 3 Bedroom Luxury Apartments',
    development: 'KEC Development',
    location: 'Al Alyaa Residences, Knowledge Economic City (KEC), Inside Madinah boundaries (Hudood)',
    bedrooms: '2-3 Beds',
    sqm: '93 - 178 sqm',
    price: 1400000,
    image: '/images/properties/al-alyaa-residences-DTN3IW8K.webp',
    features: ['Prime Location', 'Modern Design', 'High ROI Potential'],
    type: 'apartment'
  },
  {
    id: 'al-alyaa-penthouse',
    name: 'Al Alyaa Residences - Premium 4 Bedroom Penthouses',
    development: 'KEC Development',
    location: 'Al Alyaa Residences, Knowledge Economic City (KEC), Inside Madinah boundaries (Hudood)',
    bedrooms: '4 Beds',
    sqm: '242 - 308 sqm',
    price: 3700000,
    image: '/images/properties/penthouse-interior-HNo0n1px.webp',
    features: ['Spacious Living', 'Rooftop Garden', 'Haram & Uhud Views'],
    type: 'penthouse'
  }
];

export const stats = {
  projects: '200+',
  projectsLabel: 'Billion SAR in Projects',
  development: '30M+',
  developmentLabel: 'Sqm Development',
  initiatives: '224',
  initiativesLabel: 'Active Initiatives'
};

export const investmentHighlights = {
  visitors: '15M+',
  visitorsLabel: 'Annual Visitors',
  development: '30M',
  developmentLabel: 'Sqm Development',
  investment: '200B',
  investmentLabel: 'SAR Investment',
  projects: '224',
  projectsLabel: 'Projects Active'
};

export const contactInfo = {
  phone: '+966 50 268 5208',
  email: 'info@thehqconsulting.com',
  address: '2439, Ibn Shaba Street, Knowledge Economic City District, 42362, Madinah, Saudi Arabia',
  hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM'
};