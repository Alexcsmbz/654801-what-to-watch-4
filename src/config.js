export const moviePageTabs = [
  {
    name: `Overview`,
  },
  {
    name: `Details`,
  },
  {
    name: `Reviews`,
  },
];

export const RoutePath = {
  MAIN: `/`,
  LOGIN: `/login`,
  MOVIE: `/films/:id`,
  MYLIST: `/mylist`,
  REVIEW: `/films/:id/review`,
};

export const baseURL = `https://4.react.pages.academy`;

export const dateOptions = {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
};

export const testMovie = {
  name: `name`,
  posterImage: `posterImage`,
  previewImage: `previewImage`,
  backgroundImage: `backgroundImage`,
  backgroundColor: `backgroundColor`,
  description: `description`,
  rating: 8.8,
  scoresCount: 370881,
  director: `director`,
  runTime: 167,
  genre: `genre`,
  released: 2002,
  starring: [],
  id: 1,
  isFavorite: false,
  videoLink: `videoLink`,
  previewVideoLink: `previewVideoLink`,
};

export const testUser = {
  id: 1,
  name: `name`,
  email: `email`,
  avatarUrl: `avatarUrl`,
};
