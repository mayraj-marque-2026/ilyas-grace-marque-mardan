export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hall' | 'stage' | 'food' | 'entrance' | 'reception';
  imagePath: string;
  description: string;
}

export interface PackageItem {
  id: string;
  name: string;
  urduName: string;
  tagline: string;
  pricePerHead: string;
  recommendedGuests: string;
  popular?: boolean;
  features: string[];
  cateringMenu: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  eventType: string;
  eventDate: string;
  rating: number;
  reviewText: string;
  image?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: number;
  packagePreference: string;
  specialRequests: string;
}
