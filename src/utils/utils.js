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
