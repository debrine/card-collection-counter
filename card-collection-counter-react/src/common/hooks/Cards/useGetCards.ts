import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCards } from '../../../api/cards.api';
import debounce from 'lodash/debounce';
import useAsync from '../useAsync';

export function useGetCards() {
  const [debouncedSearchString, setDebouncedSearchString] = useState('');
  const { value, loading, error } = useAsync(
    () => getCards(1, debouncedSearchString),
    [debouncedSearchString]
  );

  const updateSearchString = debounce(setDebouncedSearchString, 333);

  return {
    cardGroups: value,
    updateSearchString,
  };
}
