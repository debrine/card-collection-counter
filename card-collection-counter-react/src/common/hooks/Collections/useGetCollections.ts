import { useState } from 'react';
import { Collection } from '../../../containers/Collections/collections.types';
import { MOCK_COLLECTIBLES } from '../../../mockData';

export function useGetCollections() {
  const [collections, setCollections] =
    useState<Collection[]>(MOCK_COLLECTIBLES);

  return {
    collections,
  };
}
