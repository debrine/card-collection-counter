import React from 'react';
import { useParams } from 'react-router';
import { useGetCards } from '../../../common/hooks/Cards/useGetCards';
import DisplayCard from '../../../components/DisplayCard/DisplayCard';
import { useGetCollectionDetails } from '../../../common/hooks/Collections/useGetCollectionDetails';
import CardSections from '../components/CardSection';

type Props = {};
export default function CardsPage({}: Props) {
  const { collectionID } = useParams();
  const { collectionDetails } = useGetCollectionDetails({
    collectionID,
  });
  const { cardGroups } = useGetCards({});
  return (
    <div
      className='container'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <span className='ccc-header'>
        Browse Cards For {collectionDetails.name}
      </span>

      <CardSections
        value={cardGroups?.value}
        items={cardGroups?.items ?? []}
        subGroups={cardGroups?.subGroups}
      />
    </div>
  );
}
