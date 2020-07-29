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
  if (typeof target === Array) {
    const targetEntries = target.map((t) => (Object.entries(t)));
    targetEntries.forEach((t) => t.forEach((_t) => {
      _t[0] = toCamel(_t[0]);
    }));
    const resultTarget = targetEntries.map((t) => Object.fromEntries(t));
    return resultTarget;
  }

  const targetEntries = Object.entries(target);
  targetEntries.forEach((t) => t.forEach((_t) => {
    _t[0] = toCamel(_t[0]);
  }));
  // const resultTarget = Object.fromEntries(t);
  return targetEntries;
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
) => {
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
