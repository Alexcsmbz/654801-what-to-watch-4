// import {createSelector} from 'reselect';

// export const getGenre = (s) => s.genre;
// export const getMovies = (s) => s.movies;

// export const getMoviesByGenre = createSelector(
//     getMovies,
//     getGenre,
//     (movies, genre) =>
//       genre === `All genres`
//         ? movies
//         : movies.filter((m) => m.genre === genre)
// );

// export const getGenres = createSelector(
//     getMovies,
//     (movies) => [`All genres`, ...new Set(movies.map((m) => m.genre))]
// );
