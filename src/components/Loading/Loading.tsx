import React from 'react';
import { LoadingContainer, LoadingText } from './Loading.styles';

const LoadingComponent = () => {
  return (
    <LoadingContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <LoadingText>Carregando...</LoadingText>
        <p style={{ fontSize: '24px', color: '#333' }}>Carregando...</p>
      </div>
    </LoadingContainer>
  );
};

export default LoadingComponent;
