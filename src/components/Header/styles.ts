import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLogo = styled(Image)`
  aspect-ratio: 16/9;
  width: 120px;
  height: 40px;
  object-fit: cover;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
