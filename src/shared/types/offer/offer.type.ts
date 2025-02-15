import { City } from "./city.type.js";
import { HousingType } from "./housing-type.type.js";
import { Amenities } from "./amenties.type.js";
import { Coordinates } from "./coordinates.type.js";

export type Offer = {
  title: string;
  description: string;
  publicationDate: Date;
  city: City;
  previewImage: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  housingType: HousingType;
  roomCount: number;
  guestCount: number;
  rentalPrice: number;
  amenities: Amenities[];
  author: string;
  commentCount: number;
  coordinates: Coordinates;
};
