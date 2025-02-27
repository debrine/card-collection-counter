import { useEffect, useState } from 'react';
import { MOCK_CARDS } from '../../../mockData';
import { getCards } from '../../../api/cards.api';
import useAsync from '../useAsync';

export function useGetCards({}) {
  const { value, loading, error, refresh } = useAsync(() => getCards(1), []);

  return {
    cardGroups: value,
  };
}
