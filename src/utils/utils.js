export const formatNameToPath = (name) =>
  name.replace(/ /g, `-`).replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, ``).toLowerCase();

export const extend = (a, b) => Object.assign({}, a, b);

export const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const adapterMovies = (movies) => {
  const moviesEntries = movies.map((m) => (Object.entries(m)));
  moviesEntries.forEach((m) => m.forEach((_m) => {
    _m[0] = toCamel(_m[0]);
  }));
  const resultMovies = moviesEntries.map((m) => Object.fromEntries(m));
  return resultMovies;
};

export const goNext = (isLoading, next) => isLoading ? next() : null;
