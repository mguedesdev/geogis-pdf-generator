'use client';

import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu';
import {
  ActivePagePDF,
  Container,
  EditorContainer,
  Main,
  PagePDF,
  PreviewContainer,
  PreviewPagesPDF,
  TextArea,
  TitleInput,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideMenu />
        <EditorContainer>
          <TitleInput placeholder="Parágrafo 1" />
          <TextArea placeholder="Conteúdo" />
        </EditorContainer>
        <PreviewContainer>
          <ActivePagePDF />
          <PreviewPagesPDF>
            <PagePDF>1</PagePDF>
            <PagePDF>2</PagePDF>
            <PagePDF>3</PagePDF>
            <PagePDF>4</PagePDF>
            <PagePDF>5</PagePDF>
            <PagePDF>6</PagePDF>
            <PagePDF>7</PagePDF>
          </PreviewPagesPDF>
        </PreviewContainer>
      </Main>
    </Container>
  );
};

export default Home;
