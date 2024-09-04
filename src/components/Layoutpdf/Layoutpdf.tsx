import React from 'react';
import {
  Page,
  View,
  Text as PDFText,
  Image as PDFImage,
} from '@react-pdf/renderer';
import Items from '@/@types/Items';
import useOrderContentPDF from '@/hooks/useOrderContentPDF';
import styles from './styles';

interface LayoutpdfProps {
  items: Items[];
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const renderHeader = () => (
  <View style={styles.header} fixed>
    <PDFImage style={styles.logo} src="/images/geogis-inline.png" />
    <PDFText style={styles.title}>GeoGIS Document</PDFText>
  </View>
);

const Layoutpdf: React.FC<LayoutpdfProps> = ({ items, setLoading }) => {
  const orderedContent = useOrderContentPDF(items);

  return (
    <>
      {orderedContent.map((pageItems, pageIndex) => (
        <Page
          key={`page-${pageIndex}`}
          size="A4"
          style={{ padding: 10, paddingBottom: 20 }}
        >
          {renderHeader()}
          <View style={styles.content}>
            {pageItems.map(item => (
              <View key={item.id} style={styles.paragraphView}>
                {item.type === 'paragraph' ? (
                  <PDFText style={styles.paragraphText}>{item.content}</PDFText>
                ) : (
                  <PDFImage style={styles.image} src={item.content} />
                )}
              </View>
            ))}
          </View>
        </Page>
      ))}
    </>
  );
};

export default Layoutpdf;
