import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  margin-bottom: 0.625rem;
  border: 0.0625rem solid #ddd;
  border-radius: 0.5rem;
  background-color: white;
  transition: box-shadow 0.2s;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);
  max-width: 15.625rem;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const TitleItem = styled.div`
  flex: 1;
  padding: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;

  &:hover {
    color: #777;
  }
`;

export const DragHandle = styled.div`
  cursor: grab;
  display: flex;
  align-items: center;
`;
