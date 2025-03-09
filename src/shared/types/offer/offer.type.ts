import { HousingType } from './housing-type.enum.js';
import { Amenitie } from './amentie.enum.js';
import { Coordinates } from './coordinates.type.js';
import { Photo } from './photo.type.js';
import { User } from '../user/user.type.js';

export type Offer = {
  title: string;
  description: string;
  publicationDate: Date;
  cityName: string;
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
