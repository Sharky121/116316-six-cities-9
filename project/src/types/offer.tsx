type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type Offer = {
  id: number;
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  title: string;
  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
}

export type Offers = Offer[];
