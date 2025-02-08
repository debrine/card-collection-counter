import React from 'react';
import { useGetCollections } from '../../../common/hooks/Collections/useGetCollections';
import DisplayCard from '../../../components/DisplayCard/DisplayCard';

type Props = {};

export default function CollectionsPage({}: Props) {
  const { collections } = useGetCollections();
  return (
    <div
      className='container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <span className='ccc-header'>Browse Card Collections</span>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '80%',
        }}>
        {collections.map((collection) => (
          <span
            key={collection.id}
            style={
              {
                //   marginLeft: '1rem',
                //   marginRight: '1rem',
                //   marginTop: '0.5rem',
                //   marginBottom: '0.5rem',
              }
            }>
            <DisplayCard label={collection.name} key={collection.id} />
          </span>
        ))}
      </div>
    </div>
  );
}
