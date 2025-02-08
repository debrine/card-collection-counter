import React from 'react';
import { useGetCollections } from '../hooks/useGetCollections';
import { useGetCollectionDetails } from '../../common/hooks/Collections/useGetCollectionDetails';
import { useParams } from 'react-router';
import { useGetSets } from '../../common/hooks/Sets/useGetSets';
import DisplayCard from '../../components/DisplayCard/DisplayCard';

type Props = {};

export default function SetsPage({}: Props) {
  const { collectionID } = useParams();
  const { collectionDetails } = useGetCollectionDetails({
    collectionID,
  });
  const { sets } = useGetSets({ collectionID });
  return (
    <div
      className='container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <span className='ccc-header'>
        Browse Sets For {collectionDetails.name}
      </span>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '80%',
        }}>
        {sets.map((set) => (
          <span key={set.id} style={{}}>
            <DisplayCard label={set.name} key={set.id} />
          </span>
        ))}
      </div>
    </div>
  );
}
