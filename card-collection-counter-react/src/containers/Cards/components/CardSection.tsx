import React, { memo, useState } from 'react';
import { Card } from '../cards.types';
import DisplayCard from '../../../components/DisplayCard/DisplayCard';
import { ListSectionHeader } from '../../../components/ListSectionHeader/ListSectionHeader';

export type Group<T> = {
  value: string | null;
  sortValue?: string;
  items: T[];
  subGroups?: Group<T>[];
  depth?: number;
};

const CARD_WIDTH = 240;

export default function CardSections({
  value,
  items,
  subGroups,
  depth = 0,
}: Group<Card>) {
  const [isSectionCollapsed, setIsSectionCollapsed] = useState<boolean>(false);

  console.log('rerender section value', value);
  return (
    <>
      {value != null && (
        <ListSectionHeader
          label={value}
          indentLevel={depth}
          isSectionCollapsed={isSectionCollapsed}
          toggleIsSectionCollapsed={() =>
            setIsSectionCollapsed(!isSectionCollapsed)
          }
        />
      )}

      {!isSectionCollapsed && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                gap: '1rem',
                width: '100%',
                maxWidth: `${CARD_WIDTH * 4 + 48}px`, // Account for gaps
              }}>
              {items.map((card) => (
                <DisplayCard
                  key={card.id}
                  label={card.name}
                  imageSource={card.metadata.url}
                />
              ))}
            </div>
          </div>
          {subGroups &&
            subGroups.map((group) => (
              <div
                key={group.value}
                style={{ marginBottom: depth === 0 ? '2rem' : '0rem' }}>
                <CardSections
                  value={group.value}
                  items={group.items}
                  subGroups={group.subGroups}
                  depth={depth + 1}
                />
              </div>
            ))}
        </>
      )}
    </>
  );
}
