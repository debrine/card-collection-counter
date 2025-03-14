import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useGetCards } from '../../../common/hooks/Cards/useGetCards';
import DisplayCard from '../../../components/DisplayCard/DisplayCard';
import { useGetCollectionDetails } from '../../../common/hooks/Collections/useGetCollectionDetails';
import CardSections from '../components/CardSection';
import CardsSidePanel from '../components/CardsSidePanel';

type Props = {};
export default function CardsPage({}: Props) {
  const { collectionID } = useParams();
  const { collectionDetails } = useGetCollectionDetails({
    collectionID,
  });
  const { cardGroups, updateSearchString } = useGetCards();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
      }}>
      <CardsSidePanel onSearchChange={updateSearchString} />

      <div
        style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
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
    </div>
  );
}
