import { MockServerData } from '../../types/index.js';
import { OfferGenerator } from './offer-generator.interface.js';
import { generateRandomValue, getRandomItems, getRandomItem } from '../../helpers/index.js';
import dayjs from 'dayjs';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 10;
const MIN_RATING = 1;
const MAX_RATING = 5;
const MIN_ROOM_COUNT = 1;
const MAX_ROOM_COUNT = 10;
const MIN_GUEST_COUNT = 1;
const MAX_GUEST_COUNT = 20;
const MIN_RENTAL_PRICE = 50;
const MAX_RENTAL_PRICE = 500;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem(this.mockData.titles);
    const description = getRandomItem(this.mockData.descriptions);
    const city = getRandomItem(this.mockData.cities);
    const previewImage = getRandomItem(this.mockData.previewImages);
    const photos = getRandomItems(this.mockData.photos).map((photo) => photo.src).join(';');
    const isPremium = getRandomItem(this.mockData.isPremium) ? 'Да' : 'Нет';
    const isFavorite = getRandomItem(this.mockData.isFavorite) ? 'Да' : 'Нет';
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, 1);
    const housingType = getRandomItem(this.mockData.housingTypes);
    const roomCount = generateRandomValue(MIN_ROOM_COUNT, MAX_ROOM_COUNT);
    const guestCount = generateRandomValue(MIN_GUEST_COUNT, MAX_GUEST_COUNT);
    const rentalPrice = generateRandomValue(MIN_RENTAL_PRICE, MAX_RENTAL_PRICE);
    const amenities = getRandomItems(this.mockData.amenities).join(';');
    const author = getRandomItem(this.mockData.authors);
    const commentCount = generateRandomValue(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);
    const coordinates = getRandomItem(this.mockData.coordinates);
    const coordinatesString = `${coordinates.latitude};${coordinates.longitude}`;

    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    const tsvLine = [
      title,
      description,
      createdDate,
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
      author.name,
      commentCount,
      coordinatesString
    ].join('\t');

    return tsvLine;
  }
}
