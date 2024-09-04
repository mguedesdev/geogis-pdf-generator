import { FaDownload, FaEye, FaPaperPlane } from 'react-icons/fa';
import { uploadPDF } from '@/services/api'; // Importa o serviço de upload
import { useItems } from '@/contexts/ItemsContext';
import { handleErrorToast, handleSuccessToast } from '@/utils/toastUtils';
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
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = 'document.pdf';
      link.click();
    }
  };

  const handlePreview = () => {
    if (pdfBlob) {
      const previewWindow = window.open();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      previewWindow?.document.write(
        `<iframe src="${pdfUrl}" width="100%" height="100%" />`,
      );
    }
  };

  const handleSend = async () => {
    if (!pdfBlob) return;

    try {
      const result = await uploadPDF(pdfBlob);

      if (
        typeof result === 'object' &&
        result !== null &&
        'message' in result
      ) {
        handleSuccessToast((result as { message: string }).message);
      } else {
        handleErrorToast('Resposta inesperada do servidor.');
      }
    } catch (error) {
      handleErrorToast('Erro ao enviar o PDF.');
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
          Preview
          <FaEye size={16} />
        </Button>
        <Button onClick={handleDownload}>
          Download
          <FaDownload size={16} />
        </Button>
        <Button onClick={handleSend}>
          Enviar PDF
          <FaPaperPlane size={16} />
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
