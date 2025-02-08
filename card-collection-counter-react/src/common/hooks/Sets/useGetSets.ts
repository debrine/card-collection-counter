import { useState } from 'react';
import { MOCK_SETS } from '../../../mockData';

export function useGetSets({ collectionID }: { collectionID?: string }) {
  const [sets, setSets] = useState(MOCK_SETS);

  return {
    sets,
  };
}
