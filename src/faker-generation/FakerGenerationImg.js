import { faker } from '@faker-js/faker';

export function FakerGenerationImg() {
  return {
    avatar: faker.image.avatar(),
  };
}

