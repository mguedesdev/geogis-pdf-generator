'use client';

import { FaDownload, FaEye, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useItems } from '@/contexts/ItemsContext';
import { handleErrorToast, handleSuccessToast } from '@/utils/toastUtils';
import { uploadPDF } from '@/services/api';
import { Button } from '../Button/Button';
import {
  ButtonsContainer,
  Container,
  ImageLogo,
  LogoContainer,
} from './styles';

const Header = () => {
  const { pdfBlob, loading } = useItems();

  const handlePreview = async () => {
    if (!pdfBlob) {
      handleErrorToast('O PDF ainda não foi gerado.');
      return;
    }

    const pdfUrl = URL.createObjectURL(pdfBlob);
    const previewWindow = window.open();
    previewWindow?.document.write(
      `<iframe src="${pdfUrl}" width="100%" height="100%" />`,
    );
  };

  const handleDownload = async () => {
    if (!pdfBlob) {
      handleErrorToast('O PDF ainda não foi gerado.');
      return;
    }

    const link = document.createElement('a');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    link.href = pdfUrl;
    link.download = 'document.pdf';
    link.click();
  };

  const handleSend = async () => {
    if (!pdfBlob) {
      handleErrorToast('O PDF ainda não foi gerado.');
      return;
    }

    try {
      const response = await fetch(URL.createObjectURL(pdfBlob));
      const blob = await response.blob();
      const result = await uploadPDF(blob);

      if (result && typeof result === 'object' && 'message' in result) {
        handleSuccessToast(result.message as string);
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
        <Button onClick={handlePreview} disabled={loading}>
          {loading ? (
            <>
              <FaSpinner className="spinner" size={16} />
              Gerando
            </>
          ) : (
            <FaEye size={16} />
          )}
          {loading ? '' : ' Preview'}
        </Button>
        <Button onClick={handleDownload} disabled={loading}>
          {loading ? (
            <>
              <FaSpinner className="spinner" size={16} />
              Gerando
            </>
          ) : (
            <FaDownload size={16} />
          )}
          {loading ? '' : ' Download'}
        </Button>
        <Button onClick={handleSend} disabled={loading}>
          {loading ? (
            <>
              <FaSpinner className="spinner" size={16} />
              Gerando
            </>
          ) : (
            <FaPaperPlane size={16} />
          )}
          {loading ? '' : ' Enviar PDF'}
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
