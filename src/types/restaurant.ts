export interface RestaurantConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    pincode: string;
  };
  cuisines: string[];
  hours: {
    lunch: string;
    dinner: string;
  };
  rating: {
    score: number;
    totalReviews: number;
    deliveryRatings?: number;
    badge?: string;
  };
  highlights: string[];
  signatureDishes: Array<{
    name: string;
    description: string;
  }>;
  philosophy: string;
  experience: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
  };
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  images: {
    hero: string;
    gallery: string[];
  };
  specialOffers?: string[];
  tags: string[];
}
