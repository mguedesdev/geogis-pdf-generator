'use client';

import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu';
import { useItems } from '@/services/ItemsContext';
import {
  ActivePagePDF,
  Container,
  EditorContainer,
  EmptyEditor,
  Main,
  PagePDF,
  PreviewContainer,
  PreviewPagesPDF,
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
          <EmptyEditor>Adicione um paragrafo para editar</EmptyEditor>
        )}
        <PreviewContainer>
          <ActivePagePDF />
          <PreviewPagesPDF>
            <PagePDF>1</PagePDF>
            <PagePDF>2</PagePDF>
            <PagePDF>3</PagePDF>
            <PagePDF>4</PagePDF>
            <PagePDF>5</PagePDF>
            <PagePDF>6</PagePDF>
            <PagePDF>7</PagePDF>
          </PreviewPagesPDF>
        </PreviewContainer>
      </Main>
    </Container>
  );
};

export default Home;
