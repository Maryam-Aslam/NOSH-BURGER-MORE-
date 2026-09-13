export interface SiteConfig {
  brandName: string;
  tagline: string;
  slogan: string;
  city: string;
  country: string;
  hours: {
    display: string;
    detail: string;
    isOpen: boolean;
  };
  rating: {
    stars: number;
    score: string;
    reviewCount: string;
  };
  navLinks: Array<{
    name: string;
    href: string;
    badge?: string;
  }>;
  contact: {
    phone: string;
    phoneFormatted: string;
    address: string;
    addressShort: string;
    addressFull: {
      floor: string;
      plot: string;
      market: string;
      sector: string;
      cityCountry: string;
    };
  };
}

export const siteConfig: SiteConfig = {
  brandName: 'NOSH',
  tagline: 'BURGERS & MORE',
  slogan: 'Burgers that hit different.',
  city: 'Islamabad',
  country: 'Pakistan',
  hours: {
    display: '1 PM – 3 AM Daily',
    detail: 'Delivery + Takeaway • Midnight Smash Lab',
    isOpen: true,
  },
  rating: {
    stars: 5,
    score: '4.9/5',
    reviewCount: '2,000+ RATINGS',
  },
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Popular', href: '#popular', badge: 'HOT' },
    { name: 'Contact', href: '#contact' },
  ],
  contact: {
    phone: '+92 326 5550192',
    phoneFormatted: '+92 326 5550192',
    address: 'First Floor, Flat No. 1, Plot No. 1-B, Taqwa Market, G-9/4, Islamabad, Pakistan',
    addressShort: 'G-9/4, Islamabad',
    addressFull: {
      floor: 'First Floor, Flat No. 1',
      plot: 'Plot No. 1-B',
      market: 'Taqwa Market',
      sector: 'G-9/4',
      cityCountry: 'Islamabad, Pakistan',
    },
  },
};
