import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import { Document, pdf } from '@react-pdf/renderer';
import Item from '@/@types/Items';
import Layoutpdf from '@/components/Layoutpdf/Layoutpdf';

interface ItemsContextData {
  items: Item[];
  selectedItem: Item | null;
  addItem: (item: Item) => void;
  selectItem: (id: string) => void;
  deleteItem: (id: string) => void;
  reorderItems: (newItems: Item[]) => void;
  updateItemField: (id: string, field: keyof Item, value: string) => void;
  nextParagraphNumber: () => number;
  loading: boolean;
  pdfBlob: Blob | null;
  generatePdfBlob: () => Promise<void>;
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
  const [loading, setLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const generatePdfBlob = async () => {
    setLoading(true);

    const pdfDoc = (
      <Document>
        <Layoutpdf items={items} />
      </Document>
    );

    const blob = await pdf(pdfDoc).toBlob();
    setPdfBlob(blob);

    setLoading(false);
  };

  const debouncePdfGeneration = () => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => {
      generatePdfBlob();
    }, 400);
    setDebounceTimeout(timeout);
  };

  useEffect(() => {
    debouncePdfGeneration();
  }, [items]);

  const reorderItems = (newItems: Item[]) => {
    setItems(newItems);
  };

  const addItem = async (item: Item) => {
    setItems(prevItems => [...prevItems, item]);
    if (item.type === 'paragraph') {
      setSelectedItem(item);
    }
  };

  const selectItem = (id: string) => {
    const item = items.find(i => i.id === id) || null;
    setSelectedItem(item);
  };

  const deleteItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);

    if (selectedItem?.id === id) {
      if (updatedItems.length > 0) {
        setSelectedItem(updatedItems[0]);
      } else {
        setSelectedItem(null);
      }
    }
  };

  const nextParagraphNumber = () => {
    const paragraphs = items.filter(item => item.type === 'paragraph');
    return paragraphs.length + 1;
  };

  const updateItemField = (id: string, field: keyof Item, value: string) => {
    setSelectedItem(prevItem =>
      prevItem?.id === id
        ? {
            ...prevItem,
            [field]: value,
          }
        : prevItem,
    );
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              [field]: value,
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
      updateItemField,
      nextParagraphNumber,
      loading,
      pdfBlob,
      generatePdfBlob,
    }),
    [items, selectedItem, pdfBlob, loading],
  );

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export const useItems = (): ItemsContextData => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems só pode ser usado dentro de um ItemsProvider');
  }
  return context;
};
