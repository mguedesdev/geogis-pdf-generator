// Mock de uma função de login
const loginService = async (email: string, password: string) => {
  const mockUser = {
    id: '12345',
    name: 'Usuário Exemplo',
    email: 'usuario@exemplo.com',
  };

  const mockToken = 'token-de-acesso-fictício';

  await new Promise<void>(resolve => {
    setTimeout(resolve, 1000);
  });

  // Substituir quando autenticação real disponível
  if (email === 'usuario@exemplo.com' && password === 'senha123') {
    return {
      user: mockUser,
      accessToken: mockToken,
    };
  }
  throw new Error('Credenciais inválidas');
};

export default loginService;
