const BASE_URL = 'http://localhost:3000';

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
