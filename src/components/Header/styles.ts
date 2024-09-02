import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.black};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageLogo = styled.img`
  aspect-ratio: 16/9;
  width: 120px;
  height: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
