'use client';

import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu';
import { useItems } from '@/contexts/ItemsContext';
import { useEffect } from 'react';
import {
  Container,
  EditorContainer,
  EmptyEditor,
  Main,
  TextArea,
  TitleInput,
} from './styles';

const Home = () => {
  const { updateItemField, selectedItem } = useItems();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedItem) {
      updateItemField(selectedItem.id, 'title', e.target.value);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (selectedItem) {
      updateItemField(selectedItem.id, 'content', e.target.value);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      document.title = `Editando: ${selectedItem.title}`;
    } else {
      document.title = 'Editor de PDF';
    }
  }, [selectedItem]);

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
      </Main>
    </Container>
  );
};

export default Home;
