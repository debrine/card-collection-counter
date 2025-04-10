const BASE_URL = import.meta.env.VITE_SERVER_URL;

export async function getCards(collectionID: number, searchString?: string) {
  return fetch(
    `${BASE_URL}/api/collection/${collectionID}/cards${
      searchString ? `?searchString=${searchString}` : ''
    }`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      // return [];
    });
}
