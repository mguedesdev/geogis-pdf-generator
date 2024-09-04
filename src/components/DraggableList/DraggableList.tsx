import React from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useItems } from '@/contexts/ItemsContext';
import DraggableItem from '../DraggableItem/DraggableItem';
import { ListContainer } from './styles';

const DraggableList: React.FC = () => {
  const { items, reorderItems } = useItems();
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      reorderItems(newItems);
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
            <DraggableItem key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </ListContainer>
  );
};

export default DraggableList;
