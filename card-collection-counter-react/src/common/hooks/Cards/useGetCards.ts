import { useCallback, useEffect, useMemo, useState } from 'react';
import { getCards } from '../../../api/cards.api';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import useAsync from '../useAsync';

export function useGetCards() {
  const [cardGroups, setCardGroups] = useState(undefined);
  const [debouncedSearchString, setDebouncedSearchString] = useState('');

  const { value, loading, error } = useAsync(
    () => getCards(1, debouncedSearchString),
    [debouncedSearchString]
  );

  useEffect(() => {
    if (!isEqual(value, cardGroups)) {
      setCardGroups(value);
    }
  }, [value, cardGroups]);

  const updateSearchString = debounce(setDebouncedSearchString, 333);

  return {
    cardGroups,
    updateSearchString,
  };
}
