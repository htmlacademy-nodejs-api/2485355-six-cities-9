import { prop } from '@typegoose/typegoose';
import { Amenitie, Coordinates, HousingType, Offer, Photo, User } from '../../types/index.js';

export class OfferEntity implements Offer {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

  @prop({ required: true })
  public publicationDate: Date;

  @prop({ required: true })
  public cityName: string;

  @prop({ required: true })
  public previewImage: string;

  @prop({ required: true })
  public photos: Photo[];

  @prop({ required: true })
  public isPremium: boolean;

  @prop({ required: true })
  public isFavorite: boolean;

  @prop({ required: true })
  public rating: number;

  @prop({ required: true })
  public housingType: HousingType;

  @prop({ required: true })
  public roomCount: number;

  @prop({ required: true })
  public guestCount: number;

  @prop({ required: true })
  public rentalPrice: number;

  @prop({ required: true })
  public amenities: Amenitie[];

  @prop({ required: true })
  public author: User;

  @prop({ required: true })
  public commentCount: number;

  @prop({ required: true })
  public coordinates: Coordinates;
}
