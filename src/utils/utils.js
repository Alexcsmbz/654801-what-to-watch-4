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

export const adapterKeys = (target) => {
  if (Array.isArray(target)) {
    const targetEntries = target.map((t) => (Object.entries(t)));
    targetEntries.forEach((t) => t.forEach((_t) => {
      _t[0] = toCamel(_t[0]);
    }));
    return targetEntries.map((t) => Object.fromEntries(t));
  } else if (typeof target === `object`) {
    const targetEntries = Object.entries(target);
    targetEntries.forEach((t) => {
      t[0] = toCamel(t[0]);
    });
    return Object.fromEntries(targetEntries);
  }
  return null;
};

export const goNext = (isLoading, next) => isLoading ? next() : null;

export const requestFlow = async (
  dispatch,
  {
    start,
    success,
    failed,
    stop,
  },
  uri,
  api,
  method = `get`,
  requestBody = {},
  go,
) => {
  api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          go();
        }
      });

  dispatch(start());
  try {
    switch (method) {
      case `get`:
        const getResponse = await api.get(uri);
        dispatch(success(getResponse.data));
        break;

      case `post`:
        const postResponse = await api.post(uri, requestBody);
        dispatch(success(postResponse.data));
        break;
    }
  } catch (e) {
    dispatch(failed(e.message));
  } finally {
    dispatch(stop());
  }
};

export const toggleStatus = (movies, movie) => movies.find(({id}) => id === movie.id) ? 0 : 1;
