const BASE_URL = 'http://localhost:3000';

export async function getCards(collectionID: number) {
  return fetch(`${BASE_URL}/api/collection/${collectionID}/cards`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      // return [];
    });
}
