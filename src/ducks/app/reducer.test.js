// import ActionType from './action-types.js';
// import reducer from './reducer.js';
// import movies from 'mock/movies.js';

// describe(`Reducer test`, () => {
//   it(`Reducer should set default state`, () => {
//     expect(reducer(void 0, {})).toEqual({
//       genre: `All genres`,
//       movies,
//       genres: [`All genres`, ...new Set(movies.map((m) => m.genre))],
//       backMovies: [],
//       isLoading: false,
//       errors: [],
//     });
//   });

//   it(`Reducer should set filter genre`, () => {
//     expect(reducer(
//         {
//           genre: `All genres`,
//           movies,
//           genres: [`All genres`, ...new Set(movies.map((m) => m.genre))]
//         },
//         {
//           type: ActionType.CHANGE_FILTER_BY_GENRE,
//           payload: `Crime`,
//         }
//     )).toEqual({
//       genre: `Crime`,
//       movies,
//       genres: [`All genres`, ...new Set(movies.map((m) => m.genre))]
//     });
//   });

//   it(`Reducer should get movie list by genre`, () => {
//     expect(reducer({
//       genre: `All genres`,
//       movies,
//       genres: [`All genres`, ...new Set(movies.map((m) => m.genre))]
//     }, {
//       type: ActionType.GET_MOVIE_LIST_BY_GENRE,
//       payload: `Crime`,
//     })).toEqual({
//       genre: `All genres`,
//       movies: movies.filter((m) => m.genre === `Crime`),
//       genres: [`All genres`, ...new Set(movies.map((m) => m.genre))]
//     });
//   });
// });
