import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Amenitie, Coordinates, HousingType, Photo } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true })
  public title: string;

  @prop({ required: true })
  public description: string;

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

  @prop({ ref: UserEntity, required: true })
  public userId: Ref<UserEntity>;

  @prop({ required: true })
  public commentCount: number;

  @prop({ required: true })
  public coordinates: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
