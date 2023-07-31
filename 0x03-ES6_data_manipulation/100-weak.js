export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let nom = weakMap.get(endpoint) || 0;

  nom += 1;

  weakMap.set(endpoint, nom);

  if (nom >= 5) {
    throw Error('Endpoint load is high');
  }

  return nom;
}
