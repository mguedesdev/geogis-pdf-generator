import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  padding-right: 1rem;
  border-right: 2px solid ${({ theme }) => theme.colors.borderGray};
  width: 300px;
  min-width: 300px;

  @media (max-width: 1450px) {
    width: 250px;
    min-width: 250px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
  white-space: pre-line;
  line-height: 1.5;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }
`;
