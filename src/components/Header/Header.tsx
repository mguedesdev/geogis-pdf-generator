import { FaDownload, FaEye } from 'react-icons/fa';
import { useItems } from '@/services/ItemsContext';
import { Button } from '../Button/Button';
import {
  ButtonsContainer,
  Container,
  ImageLogo,
  LogoContainer,
} from './styles';

const Header = () => {
  const { pdfBlob } = useItems();

  const handleDownload = () => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handlePreview = () => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      window.open(url, '_blank');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <ImageLogo
          src="/images/geogis-inline.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </LogoContainer>
      <ButtonsContainer>
        <Button onClick={handlePreview}>
          Visualizar
          <FaEye size={16} />
        </Button>
        <Button onClick={handleDownload}>
          Download
          <FaDownload size={16} />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
