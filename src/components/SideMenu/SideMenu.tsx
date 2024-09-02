import React, { useState } from 'react';
import { ButtonsContainer, Container, Text, Title } from './styles';
import DraggableList from '../DraggableList/DraggableList';
import { Button } from '../Button/Button';

const SideMenu = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      content: 'Parágrafo 1',
    },
  ]);

  const handleDragEnd = (newItems: { id: number; content: string }[]) => {
    setItems(newItems);
    console.log('New items:', newItems);
  };

  const handleEditItem = (id: number) => {
    console.log('Edit item with id:', id);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Title>Conteúdo</Title>
      <Text>
        {`Clique em uma seção abaixo para
      editar o conteúdo`}
      </Text>
      <DraggableList
        items={items}
        onDragEnd={handleDragEnd}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />

      <ButtonsContainer>
        <Button
          className="outline"
          onClick={() => console.log('Add new section')}
        >
          Adicionar Parágrafo
        </Button>
        <Button
          className="outline"
          onClick={() => console.log('Add new section')}
        >
          Adicionar Imagem
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default SideMenu;
