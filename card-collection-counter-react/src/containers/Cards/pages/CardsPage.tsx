import React from 'react';
import { useParams } from 'react-router';
import { useGetCards } from '../../../common/hooks/Cards/useGetCards';
import DisplayCard from '../../../components/DisplayCard/DisplayCard';
import { useGetCollectionDetails } from '../../../common/hooks/Collections/useGetCollectionDetails';

type Props = {};

export default function CardsPage({}: Props) {
  const { collectionID } = useParams();
  const { collectionDetails } = useGetCollectionDetails({
    collectionID,
  });
  const { cards } = useGetCards({});
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          width: '80%',
        }}>
        {cards.map((card) => (
          <span key={card.id} style={{}}>
            <DisplayCard label={card.name} key={card.id} />
          </span>
        ))}
      </div>
    </div>
  );
}
