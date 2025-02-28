import React, { useState } from 'react';
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

  console.log('section value', value);
  console.log('section items', items);
  return (
    <>
      {value !== null && (
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
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              width: `${CARD_WIDTH * 4}px`,
            }}>
            {items.map((card) => (
              <span
                key={card.id}
                style={{
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}>
                <DisplayCard
                  label={card.name}
                  key={card.id}
                  imageSource={card.metadata.url}
                />
              </span>
            ))}
          </div>
          {subGroups &&
            subGroups.map((group) => (
              <CardSections
                key={group.value}
                value={group.value}
                items={group.items}
                subGroups={group.subGroups}
                depth={depth + 1}
              />
            ))}
        </>
      )}
    </>
  );
}
