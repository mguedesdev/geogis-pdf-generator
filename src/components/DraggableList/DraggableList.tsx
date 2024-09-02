import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import DraggableItem from '../DraggableItem/DraggableItem';
import { ListContainer } from './styles';

interface DraggableListProps {
  items: { id: number; content: string }[];
  onDragEnd: (items: { id: number; content: string }[]) => void;
  onEditItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

const DraggableList: React.FC<DraggableListProps> = ({
  items,
  onDragEnd,
  onEditItem,
  onDeleteItem,
}) => {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      onDragEnd(newItems);
    }
  };

  return (
    <ListContainer>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map(item => (
            <DraggableItem
              key={item.id}
              item={item}
              onEditItem={onEditItem}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ListContainer>
  );
};

export default DraggableList;
