'use client';

import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu';
import { Container, Main } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideMenu />
        <h1>Home</h1>
      </Main>
    </Container>
  );
};

export default Home;
