export const formatNameToPath = (name) =>
  name.replace(/ /g, `-`).replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, ``).toLowerCase();
