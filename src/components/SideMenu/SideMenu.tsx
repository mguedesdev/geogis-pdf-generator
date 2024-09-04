import React, { useRef } from 'react';
import { useItems } from '@/contexts/ItemsContext';
import { ButtonsContainer, Container, Text, Title } from './styles';
import DraggableList from '../DraggableList/DraggableList';
import { Button } from '../Button/Button';

const SideMenu = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { addItem, nextParagraphNumber } = useItems();

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const addParagraph = () => {
    const newParagraph = {
      id: generateRandomId(),
      type: 'paragraph',
      title: `Parágrafo ${nextParagraphNumber()}`,
    };
    addItem(newParagraph);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const fileName = event.target.files[0].name;
      const newImage = {
        id: generateRandomId(),
        type: 'image',
        title: fileName,
        content: URL.createObjectURL(event.target.files[0]),
      };
      addItem(newImage);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const addImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container>
      <Title>Conteúdo</Title>
      <Text>
        {`Clique em uma seção abaixo para
      editar o conteúdo`}
      </Text>
      <DraggableList />

      <ButtonsContainer>
        <Button className="outline" onClick={addParagraph}>
          Adicionar Parágrafo
        </Button>
        <Button className="outline" onClick={addImage}>
          Adicionar Imagem
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageUpload}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default SideMenu;
