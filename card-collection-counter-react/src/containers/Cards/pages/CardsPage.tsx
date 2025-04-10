import React, { useState, useRef, useEffect } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when search results update
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [cardGroups]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        overflow: 'hidden', // Prevent outer container from scrolling
      }}>
      <CardsSidePanel onSearchChange={updateSearchString} />

      <main
        style={{
          flex: 1,
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}>
          <span className='ccc-header'>
            Browse Cards For {collectionDetails.name}
          </span>
        </div>

        <div
          ref={scrollContainerRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0 20px 20px 20px',
          }}>
          <CardSections
            value={cardGroups?.value}
            items={cardGroups?.items ?? []}
            subGroups={cardGroups?.subGroups}
          />
        </div>
      </main>
    </div>
  );
}
