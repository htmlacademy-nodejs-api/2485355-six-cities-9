import { City } from './city.type.js';
import { HousingType } from './housing-type.type.js';
import { Amenitie } from './amentie.type.js';
import { Coordinates } from './coordinates.type.js';
import { Photo } from './photo.type.js';
import { User } from '../user/user.type.js';

export type Offer = {
  title: string;
  description: string;
  publicationDate: Date;
  city: City;
  previewImage: string;
  photos: Photo[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  housingType: HousingType;
  roomCount: number;
  guestCount: number;
  rentalPrice: number;
  amenities: Amenitie[];
  author: User;
  commentCount: number;
  coordinates: Coordinates;
};
