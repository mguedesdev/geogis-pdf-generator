import Items from '@/@types/Items';

const useOrderContentPDF = (items: Items[]) => {
  const orderedContent = () => {
    const pages: Items[][] = [];
    let currentParagraphGroup: Items[] = [];

    items.forEach(item => {
      if (item.type === 'paragraph') {
        currentParagraphGroup.push(item);
      } else if (item.type === 'image') {
        if (currentParagraphGroup.length > 0) {
          pages.push(currentParagraphGroup);
          currentParagraphGroup = [];
        }
        pages.push([item]);
      }
    });

    if (currentParagraphGroup.length > 0) {
      pages.push(currentParagraphGroup);
    }

    return pages;
  };

  return orderedContent();
};

export default useOrderContentPDF;
