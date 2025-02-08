import { useState } from 'react';
import { MOCK_CARDS } from '../../../mockData';

export function useGetCards({}) {
  const [cards, setCards] = useState(MOCK_CARDS);

  return {
    cards,
  };
}
