import React, { useState, useEffect } from 'react';
import { useItems } from '@/services/ItemsContext';
import {
  Document,
  Page,
  View,
  Text as PDFText,
  Image as PDFImage,
  PDFViewer,
} from '@react-pdf/renderer';
import Items from '@/@types/Items';
import styles from './styles';

const renderHeader = () => (
  <View style={styles.header} fixed>
    <PDFImage style={styles.logo} src="/images/geogis-inline.png" />
    <PDFText style={styles.title}>GeoGIS Document</PDFText>
  </View>
);

const PDFPreview: React.FC = () => {
  const { items } = useItems();
  const [debouncedItems, setDebouncedItems] = useState<Items[]>(items);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedItems(items);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [items]);

  const renderGroupedParagraphs = (paragraphs: Items[], startIndex: number) => (
    <Page
      key={`page-paragraphs-${startIndex}`}
      size="A4"
      style={{ padding: 10, paddingBottom: 20 }}
    >
      {renderHeader()}
      <View style={styles.content}>
        {paragraphs.map(item => (
          <View key={item.id} style={styles.paragraphView}>
            <PDFText style={styles.paragraphText}>{item.content}</PDFText>
          </View>
        ))}
      </View>
    </Page>
  );

  const renderImagePage = (item: Items) => (
    <Page
      key={`page-image-${item.id}`}
      size="A4"
      style={{ padding: 10, paddingBottom: 30 }}
    >
      {renderHeader()}
      <View style={styles.content}>
        <PDFImage style={styles.image} src={item.content} />
      </View>
    </Page>
  );

  const generatePDFContent = () => {
    const pages: JSX.Element[] = [];
    let currentParagraphGroup: Items[] = [];

    debouncedItems.forEach((item, index) => {
      if (item.type === 'paragraph') {
        currentParagraphGroup.push(item);
      }

      if (item.type === 'image') {
        if (currentParagraphGroup.length > 0) {
          pages.push(renderGroupedParagraphs(currentParagraphGroup, index));
          currentParagraphGroup = [];
        }
        if (item.content) {
          pages.push(renderImagePage(item));
        }
      }
    });

    if (currentParagraphGroup.length > 0) {
      pages.push(
        renderGroupedParagraphs(currentParagraphGroup, debouncedItems.length),
      );
    }

    return pages;
  };

  return (
    <PDFViewer width="100%" height="100%" showToolbar>
      <Document>{generatePDFContent()}</Document>
    </PDFViewer>
  );
};

export default PDFPreview;
