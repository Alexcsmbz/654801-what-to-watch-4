export const formatNameToPath = (name) =>
  name.replace(/ /g, `-`).replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, ``).toLowerCase();

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
