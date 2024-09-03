import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import Item from '@/@types/Items';

interface ItemsContextData {
  items: Item[];
  selectedItem: Item | null;
  addItem: (item: Item) => void;
  selectItem: (id: string) => void;
  deleteItem: (id: string) => void;
  reorderItems: (newItems: Item[]) => void;
  updateContent: (
    id: string,
    updatedContent?: string,
    updatedTitle?: string,
  ) => void;
}

const ItemsContext = createContext<ItemsContextData | undefined>(undefined);

export const ItemsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 'item-1',
      type: 'paragraph',
      title: 'Parágrafo 1',
      content: 'Conteúdo do Parágrafo',
    },
  ]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(items[0]);

  useEffect(() => {
    if (selectedItem) {
      const updatedSelectedItem = items.find(
        item => item.id === selectedItem.id,
      );
      if (updatedSelectedItem) {
        setSelectedItem(updatedSelectedItem);
      }
    }
  }, [items]);

  const reorderItems = (newItems: Item[]) => {
    setItems(newItems);
  };

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  const selectItem = (id: string) => {
    const item = items.find(i => i.id === id) || null;
    setSelectedItem(item);
  };

  const deleteItem = (id: string) => {
    if (items.length === 1) {
      return alert('Não é possível deletar o último item');
    }
    setItems(items.filter(item => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };

  const updateContent = (
    id: string,
    updatedContent?: string,
    updatedTitle?: string,
  ) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              content:
                updatedContent !== undefined ? updatedContent : item.content,
              title: updatedTitle !== undefined ? updatedTitle : item.title,
            }
          : item,
      ),
    );
  };

  const value = useMemo(
    () => ({
      items,
      selectedItem,
      addItem,
      selectItem,
      deleteItem,
      reorderItems,
      updateContent,
    }),
    [items, selectedItem],
  );

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export const useItems = (): ItemsContextData => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
};
