import { readFileSync } from 'node:fs';
import { FileReader } from './file-reader.interface.js';
import { Offer, City, Photo, HousingType, Amenitie, Coordinates } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  private validateRawData(): void {
    if (! this.rawData) {
      throw new Error('File was not read');
    }
  }

  private parseRawDataToOffers(): Offer[] {
    return this.rawData
      .split('\n')
      .filter((raw) => raw.trim().length > 0)
      .map((line) => this.parseLineToOffer(line));
  }

  private parseLineToOffer(line: string): Offer {
    const [
      title,
      description,
      publicationDate,
      city,
      previewImage,
      photos,
      isPremium,
      isFavorite,
      rating,
      housingType,
      roomCount,
      guestCount,
      rentalPrice,
      amenities,
      author,
      commentCount,
      coordinates
    ] = line.split('\t');

    return {
      title,
      description,
      publicationDate: new Date(publicationDate),
      city: city as City,
      previewImage,
      photos: this.parsePhotos(photos),
      isPremium: this.parseIsPremium(isPremium),
      isFavorite: this.parseIsFavorite(isFavorite),
      rating: Number.parseFloat(rating),
      housingType: housingType as HousingType,
      roomCount: Number.parseInt(roomCount, 10),
      guestCount: Number.parseInt(guestCount, 10),
      rentalPrice: Number.parseInt(rentalPrice, 10),
      amenities: this.parseAmenities(amenities),
      author: author,
      commentCount: Number.parseInt(commentCount, 10),
      coordinates: this.parseCoordinates(coordinates)
    };
  }

  private parsePhotos(photosString: string): Photo[] {
    return photosString.split(';').map((src) => ({
      src
    }));
  }

  private parseIsPremium(isPremiumString: string): boolean {
    return isPremiumString === 'Да';
  }

  private parseIsFavorite(isFavoriteString: string): boolean {
    return isFavoriteString === 'Да';
  }

  private parseAmenities(amenitiesString: string): Amenitie[] {
    return amenitiesString.split(';').map((amentie) => amentie.trim()) as Amenitie[];
  }

  private parseCoordinates(coordinatesString: string): Coordinates {
    const [latitude, longitude] = coordinatesString.split(';').map((coordinate) => Number.parseFloat(coordinate));
    return {latitude, longitude};
  }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    this.validateRawData();
    return this.parseRawDataToOffers();
  }
}
