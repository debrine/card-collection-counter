import { useState } from 'react';
import { MOCK_COLLECTIBLE_DETAILS } from '../../../mockData';

export function useGetCollectionDetails({
  collectionID,
}: {
  collectionID?: string;
}) {
  const [collectionDetails, setCollectionDetails] = useState(
    MOCK_COLLECTIBLE_DETAILS
  );

  return {
    collectionDetails,
  };
}
