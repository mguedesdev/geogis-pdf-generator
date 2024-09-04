import React, { useRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDragHandle, MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import Items from '@/@types/Items';
import { useItems } from '@/contexts/ItemsContext';
import {
  ItemContainer,
  IconButton,
  DragHandle,
  TitleItem,
  ButtonsContainer,
} from './styles';

interface DraggableItemProps {
  item: Items;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
  const { selectItem, deleteItem, updateItemField } = useItems();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: item.type === 'paragraph' ? 'pointer' : 'default',
  };

  const handleImageEdit = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileUrl = URL.createObjectURL(event.target.files[0]);
      const fileName = event.target.files[0].name;
      updateItemField(item.id, 'content', fileUrl);
      updateItemField(item.id, 'title', fileName);
    }
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteItem(item.id);
  };

  return (
    <ItemContainer
      ref={setNodeRef}
      {...attributes}
      onClick={() => {
        if (item.type === 'paragraph') {
          selectItem(item.id);
        }
      }}
      style={style}
    >
      <DragHandle {...listeners}>
        <MdDragHandle size={20} />
      </DragHandle>
      <TitleItem>{item.title}</TitleItem>
      <ButtonsContainer>
        {item.type === 'image' && (
          <>
            <IconButton onClick={handleImageEdit}>
              <MdEdit size={16} />
            </IconButton>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </>
        )}
        <IconButton onClick={handleDelete}>
          <FaTrash size={16} />
        </IconButton>
      </ButtonsContainer>
    </ItemContainer>
  );
};

export default DraggableItem;
