import { Amenitie, Coordinates, HousingType, Photo } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public cityName: string;
  public previewImage: string;
  public photos: Photo[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public housingType: HousingType;
  public roomCount: number;
  public guestCount: number;
  public rentalPrice: number;
  public amenities: Amenitie[];
  public userId: string;
  public commentCount: number;
  public coordinates: Coordinates;
}
