import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 0.5rem;
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  height: 100%;
`;

export const TitleInput = styled.input`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  padding: 0.5rem 0;

  transition: all 0.3s;

  &:focus {
    font-size: 1.5rem;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};

  border: none;
  background-color: transparent;
  outline: none;
  resize: none;
  height: 100%;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.borderGray};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  height: 100%;
`;

export const ActivePagePDF = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  height: 100%;
`;

export const PreviewPagesPDF = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  overflow-x: auto;
  overflow-y: hidden;
`;

export const PagePDF = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  background-color: ${({ theme }) => theme.colors.white};
`;
