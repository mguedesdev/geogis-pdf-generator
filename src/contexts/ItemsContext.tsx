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
  nextParagraphNumber: () => number;
  pdfBlob?: Blob | null;
  setPdfBlob: (blob: Blob) => void;
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
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    if (selectedItem) {
      const updatedSelectedItem = items.find(
        item => item.id === selectedItem.id,
      );
      if (updatedSelectedItem) {
        setSelectedItem(updatedSelectedItem);
      }
    }
    if (items.length === 0) {
      setSelectedItem(null);
    }
  }, [items]);

  const reorderItems = (newItems: Item[]) => {
    setItems(newItems);
  };

  const addItem = async (item: Item) => {
    if (item.type === 'image' && item.content?.startsWith('blob:')) {
      const blob = await fetch(item.content).then(r => r.blob());
      item.content = await blobToBase64(blob);
    }
    setItems(prevItems => [...prevItems, item]);
    if (item.type === 'paragraph') {
      setSelectedItem(item);
    }

    console.log(items);
  };

  const selectItem = (id: string) => {
    const item = items.find(i => i.id === id) || null;
    setSelectedItem(item);
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
  };
  const nextParagraphNumber = () => {
    const paragraphs = items.filter(item => item.type === 'paragraph');
    return paragraphs.length + 1;
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
      nextParagraphNumber,
      pdfBlob,
      setPdfBlob,
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
