'use client';

import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu';
import { useItems } from '@/services/ItemsContext';
import PDFPreview from '@/components/PDFPreview/PDFPreview';
import {
  ActivePagePDF,
  Container,
  EditorContainer,
  EmptyEditor,
  Main,
  PreviewContainer,
  TextArea,
  TitleInput,
} from './styles';

const Home = () => {
  const { updateContent, selectedItem } = useItems();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedItem) {
      updateContent(selectedItem.id, selectedItem.content, e.target.value);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedItem) {
      updateContent(selectedItem.id, e.target.value, selectedItem.title);
    }
  };

  return (
    <Container>
      <Header />
      <Main>
        <SideMenu />
        {selectedItem ? (
          <EditorContainer>
            <TitleInput
              value={selectedItem?.title || ''}
              onChange={handleTitleChange}
            />
            <TextArea
              value={selectedItem?.content || ''}
              onChange={handleContentChange}
            />
          </EditorContainer>
        ) : (
          <EmptyEditor>Adicione um parágrafo para editar</EmptyEditor>
        )}
        <PreviewContainer>
          <PDFPreview />
        </PreviewContainer>
      </Main>
    </Container>
  );
};

export default Home;
