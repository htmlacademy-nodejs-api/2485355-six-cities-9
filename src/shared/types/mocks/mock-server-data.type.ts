import { Amenitie } from '../offer/amentie.type.js';
import { City } from '../offer/city.type.js';
import { Coordinates } from '../offer/coordinates.type.js';
import { HousingType } from '../offer/housing-type.type.js';
import { Photo } from '../offer/photo.type.js';
import { UserType } from '../user/user-type.type.js';
import { User } from '../user/user.type.js';

export type MockServerData = {
  texts: string[];
  createdAts: string[];
  authors: User[];
  titles: string[];
  descriptions: string[];
  cities: City[];
  previewImages: string[];
  photos: Photo[];
  isPremium: boolean[];
  isFavorite: boolean[];
  housingTypes: HousingType[];
  amenities: Amenitie[];
  coordinates: Coordinates[];
  names: string[];
  emails: string[];
  avatars: string[];
  passwords: string[];
  types: UserType[];
};
