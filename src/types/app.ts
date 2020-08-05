export interface IMovie {
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  isFavorite: boolean,
  name: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
  rating: number,
  released: number,
  runTime: number,
  scoresCount: number,
  starring: Array<string>,
  videoLink: string,
}

export interface IAuthInfo {
  email: string,
  password: string,
}

export interface IUser {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
}

export interface ICommentPost {
  rating: number,
  comment: string,
}

export interface ICommentGet extends ICommentPost {
  id: number,
  date: string,
  user: {
    id: number,
    name: string,
  },
}

