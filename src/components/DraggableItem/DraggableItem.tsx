import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDragHandle } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { ItemContainer, IconButton, DragHandle, TitleItem } from './styles';

interface DraggableItemProps {
  item: {
    id: number;
    content: string;
  };
  onEditItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  item,
  onDeleteItem,
  onEditItem,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ItemContainer
      ref={setNodeRef}
      style={style}
      {...attributes}
      onClick={() => onEditItem(item.id)}
    >
      <DragHandle {...listeners}>
        <MdDragHandle size={20} />
      </DragHandle>
      <TitleItem>{item.content}</TitleItem>
      <IconButton onClick={() => onDeleteItem(item.id)}>
        <FaTrash size={16} />
      </IconButton>
    </ItemContainer>
  );
};

export default DraggableItem;
