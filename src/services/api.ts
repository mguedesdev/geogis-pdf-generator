import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiExemplo.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadPDF = async (pdfBlob: Blob) => {
  const formData = new FormData();
  formData.append('file', pdfBlob, 'document.pdf');

  try {
    const response = await api.post('/uploadPDF', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar o PDF:', error);
    throw error;
  }
};

export default api;
