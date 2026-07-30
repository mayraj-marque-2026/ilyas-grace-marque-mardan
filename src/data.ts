import { GalleryItem, PackageItem, Testimonial } from './types';

export const VENUE_INFO = {
  name: 'Ilyas Grace Marquee',
  tagline: 'Mardan’s Premier Venue for Grand Weddings & Royale Celebrations',
  location: 'Muqam Chowk, Training Ground Area, Defence Colony, Mardan, KPK, Pakistan',
  phoneDisplay: '+92 313 8677761',
  phoneRaw: '923138677761',
  whatsappNumber: '923138677761',
  hours: '6:00 AM – 10:00 PM (Daily)',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.782803622415!2d72.0350!3d34.1950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9370000000001%3A0x1!2sMuqam%20Chowk%2C%20Defence%20Colony%2C%20Mardan%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk'
};

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Hall Interior',
    category: 'hall',
    imagePath: '/images/hero.jpg',
    description: 'Spacious air-conditioned marquee hall with crystal chandeliers and luxury seating.'
  },
  {
    id: 'gal-2',
    title: 'Seating & Table Arrangement',
    category: 'hall',
    imagePath: '/images/hall-1.jpg',
    description: 'Elegantly decked round tables with gold Chiavari chairs and fine linen.'
  },
  {
    id: 'gal-3',
    title: 'Royal Stage Setup',
    category: 'stage',
    imagePath: '/images/stage-1.jpg',
    description: 'Opulent gold throne seating with white & maroon floral backdrop for Barat & Walima.'
  },
  {
    id: 'gal-4',
    title: 'Stage Lighting & Floral Backdrop',
    category: 'stage',
    imagePath: '/images/stage-2.jpg',
    description: 'Fairy lights and warm spotlighting designed for memorable bridal photography.'
  },
  {
    id: 'gal-5',
    title: 'Pakistani Gourmet Catering',
    category: 'food',
    imagePath: '/images/food-1.jpg',
    description: 'Hot buffet setup featuring aromatic Biryani, Seekh Kebabs, Karahi & Naan.'
  },
  {
    id: 'gal-6',
    title: 'Dessert & Live Stalls',
    category: 'food',
    imagePath: '/images/food-2.jpg',
    description: 'Traditional Pakistani desserts including Kheer, Gulab Jamun, and fresh salad bar.'
  },
  {
    id: 'gal-7',
    title: 'Illuminated Night Entrance',
    category: 'entrance',
    imagePath: '/images/entrance.jpg',
    description: 'Red carpet entry with floral arches and brilliant warm floodlighting.'
  },
  {
    id: 'gal-8',
    title: 'Separate Female Reception Area',
    category: 'reception',
    imagePath: '/images/reception.jpg',
    description: 'Private, secure, and dignified reception setup tailored for female guests.'
  },
  {
    id: 'gal-9',
    title: 'Spacious Parking Area',
    category: 'entrance',
    imagePath: '/images/parking.jpg',
    description: 'Ample parking capacity for 300+ vehicles with dedicated security staff.'
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-silver',
    name: 'Silver Shadi Package',
    urduName: 'سلور شادی پیکیج',
    tagline: 'Ideal for intimate Barat, Engagement & Family Gatherings',
    pricePerHead: 'Rs. 1,450 / head',
    recommendedGuests: '200 – 500 Guests',
    features: [
      'Full Air-Conditioned / Heated Hall Setup',
      'Standard Stage Decoration with Floral Elements',
      'Gold Chiavari Chairs & Round Banquet Tables',
      'Separate Male & Female Partitions Available',
      'Basic Sound System & Ambient Lighting',
      'Valet Parking & Security Staff'
    ],
    cateringMenu: [
      'Chicken Biryani / Pulao',
      'Chicken Karahi (Desi Style)',
      'Chicken Seekh Kebab',
      'Fresh Roti / Roghani Naan',
      'Mixed Green Salad & Raita',
      'Traditional Kheer or Kulfi'
    ]
  },
  {
    id: 'pkg-gold',
    name: 'Royal Walima Package',
    urduName: 'رائل ولیمہ پیکیج',
    tagline: 'Most Popular Choice for Royal Walima & Grand Barat Ceremonies',
    pricePerHead: 'Rs. 1,850 / head',
    recommendedGuests: '400 – 1200 Guests',
    popular: true,
    features: [
      'Full Marquee Hall with Crystal Chandeliers',
      'Premium Royal Stage Decor with Floral Archways',
      'Red Carpet Entrance & Flower Pathways',
      'Dedicated Female Reception Desk & Staff',
      'HD Sound System & Moving Head Lights',
      'Bridal Room with Attached Bathroom',
      'Generators & 100% Uninterrupted Power Backup'
    ],
    cateringMenu: [
      'Special Beef / Chicken Degi Biryani',
      'Mutton Karahi or Chicken White Karahi',
      'Barbeque Platter (Seekh Kebab + Reshmi Kebab)',
      'Fresh Naan & Sesame Kulcha',
      'Special Dessert (Gulab Jamun + Shahi Kheer)',
      'Soft Drinks & Tea Service'
    ]
  },
  {
    id: 'pkg-platinum',
    name: 'Grand VIP Celebration',
    urduName: 'گرینڈ وی آئی پی جشن پیکیج',
    tagline: 'Bespoke Luxury Experience for Expos, VIP Walimas & Mega Events',
    pricePerHead: 'Rs. 2,400 / head',
    recommendedGuests: '600 – 1500+ Guests',
    features: [
      'Exclusive Access to Entire Venue & Grounds',
      'Customized Designer Stage & Floral Wall',
      'Gourmet Buffet Stalls & Live BBQ Cooking',
      'VIP Lounge for Family & Distinguished Guests',
      'Personalized Event Coordinator & Hostesses',
      'Valet Service for 200+ Cars',
      'Illuminated Pathway & LED Wall Setup'
    ],
    cateringMenu: [
      'Special Lamb / Mutton Kabuli Pulao',
      'Mutton Namkeen Karahi & Chicken Handi',
      'Full BBQ Station (Tikka, Seekh, Malai Boti)',
      'Assorted Fresh Breads (Tandoori, Roghani, Naan)',
      'Live Jalebi & Gourmet Halwa / Kheer Stall',
      'Green Tea (Kahwa) with Cardamom & Mint'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Malik Zeeshan Khan',
    location: 'Defence Colony, Mardan',
    eventType: 'Barat Ceremony (800 Guests)',
    eventDate: 'October 2025',
    rating: 5,
    reviewText: 'Ilyas Grace Marquee surpassed all our expectations! The stage setup was breathtaking and the separate female hall arrangement gave complete peace of mind to our family. The chicken biryani and mutton karahi were praised by every single guest!'
  },
  {
    id: 'test-2',
    clientName: 'Dr. Fatima Tariq',
    location: 'Nowshera Road, Mardan',
    eventType: 'Walima Reception (600 Guests)',
    eventDate: 'December 2025',
    rating: 5,
    reviewText: 'Outstanding management! Parking was completely smooth despite 600+ guests arriving at once. The hall heating kept everyone comfortable, and the staff was extremely courteous. Best venue in Mardan without a doubt.'
  },
  {
    id: 'test-3',
    clientName: 'Engineer Hamza Afridi',
    location: 'Peshawar / Mardan',
    eventType: 'Engagement & Ring Ceremony',
    eventDate: 'January 2026',
    rating: 5,
    reviewText: 'The lighting, ambient decor, and red carpet entrance looked divine in our wedding photos. Booking through WhatsApp was so easy and the management honored every commitment made in the agreement.'
  },
  {
    id: 'test-4',
    clientName: 'Sher Ali & Family',
    location: 'Muqam Chowk, Mardan',
    eventType: 'Corporate Expo & Gathering',
    eventDate: 'February 2026',
    rating: 5,
    reviewText: 'Spacious hall with incredible acoustic setup. The catering was served hot and prompt. Highly recommend Ilyas Grace Marquee for any grand function in KPK!'
  }
];
